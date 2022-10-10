class SettingToConfirmFollowFromRemote < ActiveRecord::Migration[6.1]
  def up
    User.joins('join settings on users.id = settings.thing_id').where(settings: {thing_type: :User, value: "--- conservative\n"}).find_each do |user|
      user.settings['confirm_follow_from_remote'] = false
    end
  end

  def down
    # nothing to do
  end
end
