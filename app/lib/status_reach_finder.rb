# frozen_string_literal: true

class StatusReachFinder
  # @param [Status] status
  # @param [Hash] options
  # @option options [Boolean] :unsafe
  def initialize(status, options = {})
    @status  = status
    @options = options
  end

  def inboxes
    (reached_account_inboxes + followers_inboxes + relay_inboxes).uniq
  end

  private

  def reached_account_inboxes
    Account.where(id: reached_account_ids).where.not(domain: banned_domains).inboxes
  end

  def reached_account_ids
    # When the status is a reblog, there are no interactions with it
    # directly, we assume all interactions are with the original one

    if @status.reblog?
      [reblog_of_account_id]
    else
      [
        replied_to_account_id,
        reblog_of_account_id,
        mentioned_account_ids,
        reblogs_account_ids,
        favourites_account_ids,
        replies_account_ids,
      ].tap do |arr|
        arr.flatten!
        arr.compact!
        arr.uniq!
      end
    end
  end

  def replied_to_account_id
    @status.in_reply_to_account_id if distributable?
  end

  def reblog_of_account_id
    @status.reblog.account_id if @status.reblog?
  end

  def mentioned_account_ids
    @status.mentions.pluck(:account_id)
  end

  # Beware: Reblogs can be created without the author having had access to the status
  def reblogs_account_ids
    @status.reblogs.pluck(:account_id) if distributable? || unsafe?
  end

  # Beware: Favourites can be created without the author having had access to the status
  def favourites_account_ids
    @status.favourites.pluck(:account_id) if distributable? || unsafe?
  end

  # Beware: Replies can be created without the author having had access to the status
  def replies_account_ids
    @status.replies.pluck(:account_id) if distributable? || unsafe?
  end

  def followers_inboxes
    if @status.in_reply_to_local_account? && distributable?
      @status.account.followers.or(@status.thread.account.followers).inboxes
    elsif @status.direct_visibility? || @status.limited_visibility?
      []
    else
      @status.account.followers.where.not(domain: banned_domains).inboxes
    end
  end

  def relay_inboxes
    if @status.public_visibility?
      Relay.enabled.pluck(:inbox_url)
    else
      []
    end
  end

  def distributable?
    @status.public_visibility? || @status.unlisted_visibility?
  end

  def unsafe?
    @options[:unsafe]
  end

  def banned_domains
    return @banned_domains if @banned_domains
    blocks = []
    blocks << DomainBlock.where(reject_send_public_unlisted: true).pluck(:domain) if @status.public_visibility? || @status.unlisted_visibility?
    blocks << DomainBlock.where(reject_send_private: true).pluck(:domain) if @status.private_visibility? || @status.direct_visibility? || @status.limited_visibility?
    return @banned_domains = blocks.uniq
  end
end
