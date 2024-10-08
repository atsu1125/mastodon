# frozen_string_literal: true

class Api::V1::FeaturedTags::SuggestionsController < Api::BaseController
  before_action -> { doorkeeper_authorize! :read, :'read:accounts' }, only: :index
  before_action :require_user!
  before_action :set_recently_used_tags, only: :index

  def index
    render json: @recently_used_tags, each_serializer: REST::TagSerializer
  end

  private

  def set_recently_used_tags
    @recently_used_tags = Tag.recently_used(current_account).where.not(id: featured_tag_ids).limit(10)
  end

  def featured_tag_ids
    current_account.featured_tags.pluck(:tag_id)
  end
end
