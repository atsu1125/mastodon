# frozen_string_literal: true

class VisitService < BaseService
    include Payloadable
  
    def call(account, target_account)
      return if account.id == target_account.id
    
      visit = account.visit!(target_account)
  
      create_notification(visit) if !target_account.local? && target_account.activitypub?
      visit
    end
  
    private
  
    def create_notification(visit)
      ActivityPub::DeliveryWorker.perform_async(build_json(visit), visit.account_id, visit.target_account.inbox_url)
    end
  
    def build_json(visit)
      Oj.dump(serialize_payload(visit, ActivityPub::ViewSerializer))
    end
  end
  
