# frozen_string_literal: true

class ActivityPub::Activity::View < ActivityPub::Activity
  def perform
    target_account = account_from_uri(object_uri)

    return if target_account.nil? || !target_account.local?

    if @account.visiting?(target_account)
      @account.visit_relationships.find_by(target_account: target_account).update(uri: @json['id']) if @json['id'].present?
      return
    end


    unless delete_arrived_first?(@json['id'])
      @account.visit!(target_account, uri: @json['id'])
    end
  end
end
