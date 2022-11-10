# frozen_string_literal: true

class ActivityPub::Activity::Follow < ActivityPub::Activity
  include Payloadable

  def perform
    target_account = account_from_uri(object_uri)

    return if target_account.nil? || !target_account.local? || delete_arrived_first?(@json['id'])

    # Update id of already-existing follow requests
    existing_follow_request = ::FollowRequest.find_by(account: @account, target_account: target_account)
    unless existing_follow_request.nil?
      existing_follow_request.update!(uri: @json['id'])
      return
    end

    # フォロー対象アカウントが引越し済み　or
    # フォロー対象アカウントがインスタンスアクター  or
    # フォロー対象アカウントがローカルでフォローを許可しない設定
    # 以上の場合にフォロー拒否する
    if target_account.moved? || target_account.instance_actor? || (target_account.local? && target_account.user.setting_do_not_allow_follow)
      reject_follow_request!(target_account)
      return
    end

    # Fast-forward repeat follow requests
    existing_follow = ::Follow.find_by(account: @account, target_account: target_account)
    unless existing_follow.nil?
      existing_follow.update!(uri: @json['id'])
      AuthorizeFollowService.new.call(@account, target_account, skip_follow_request: true, follow_request_uri: @json['id'])
      return
    end

    follow_request = FollowRequest.create!(account: @account, target_account: target_account, uri: @json['id'])

    # フォロー対象アカウントがリモートで承認制である or
    # フォロー対象アカウントがローカルで承認制である or
    # フォロー対象アカウントがローカルで承認制だがフォローしているユーザーからのフォローは許可する設定でかつフォローしていない場合 or
    # フォロワーがサイレンスされている場合　or
    # フォロワーがBotである場合 or
    # フォロー対象アカウントがブロックしている場合 or
    # フォロー対象アカウントがドメインブロックしている場合 or
    # フォロー対象アカウントがローカルでリモートからのフォローは承認制である場合
    # 以上の場合にフォローリクエストを発行する
    if (!target_account.local? && target_account.locked?) || (target_account.local? && target_account.locked? && !target_account.user.setting_auto_accept_followed) || (target_account.local? && target_account.locked? && target_account.user.setting_auto_accept_followed && !target_account.following?(@account)) || (@account.silenced? && target_account.local? && !target_account.user.setting_auto_accept_followed) || (@account.silenced? && target_account.local? && target_account.user.setting_auto_accept_followed && !target_account.following?(@account)) || (target_account.local? && @account.bot? && !target_account.user.setting_auto_accept_followed) || (target_account.local? && @account.bot? && target_account.user.setting_auto_accept_followed && !target_account.following?(@account)) || target_account.blocking?(@account) || target_account.domain_blocking?(@account.domain) || (!@account.local? && target_account.local? && target_account.user.setting_confirm_follow_from_remote && !target_account.user.setting_auto_accept_followed) || (!@account.local? && target_account.local? && target_account.user.setting_confirm_follow_from_remote && target_account.user.setting_auto_accept_followed && !target_account.following?(@account))
      NotifyService.new.call(target_account, :follow_request, follow_request)
    else
      AuthorizeFollowService.new.call(@account, target_account)
      NotifyService.new.call(target_account, :follow, ::Follow.find_by(account: @account, target_account: target_account))
    end
  end

  def reject_follow_request!(target_account)
    json = Oj.dump(serialize_payload(FollowRequest.new(account: @account, target_account: target_account, uri: @json['id']), ActivityPub::RejectFollowSerializer))
    ActivityPub::DeliveryWorker.perform_async(json, target_account.id, @account.inbox_url)
  end
end
