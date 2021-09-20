# frozen_string_literal: true

class Api::V1::VisitsController < Api::BaseController
    before_action -> { doorkeeper_authorize! :follow, :'read:visits' }
    before_action :require_user!
    after_action :insert_pagination_headers
  
    def index
      @accounts = load_accounts
      render json: @accounts, each_serializer: REST::AccountSerializer
    end
  
    private
  
    def load_accounts
      paginated_visits.map(&:account)
    end
  
    def paginated_visits
      @paginated_visits ||= Visit.where(target_account: current_account)
                                 .joins(:account)
                                 .merge(Account.without_suspended)
                                 .paginate_by_max_id(
                                   limit_param(DEFAULT_ACCOUNTS_LIMIT),
                                   params[:max_id],
                                   params[:since_id]
                                 )
    end
  
    def insert_pagination_headers
      set_pagination_headers(next_path, prev_path)
    end
  
    def next_path
      if records_continue?
        api_v1_visits_url pagination_params(max_id: pagination_max_id)
      end
    end
  
    def prev_path
      unless paginated_visits.empty?
        api_v1_visits_url pagination_params(since_id: pagination_since_id)
      end
    end
  
    def pagination_max_id
      paginated_visits.last.id
    end
  
    def pagination_since_id
      paginated_visits.first.id
    end
  
    def records_continue?
      paginated_visits.size == limit_param(DEFAULT_ACCOUNTS_LIMIT)
    end
  
    def pagination_params(core_params)
      params.slice(:limit).permit(:limit).merge(core_params)
    end
  end
  
