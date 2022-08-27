class DefaultSkipSignInTokenToUsers < ActiveRecord::Migration[6.1]
  def up
    change_column_default :users, :skip_sign_in_token, true
  end

  def down
    change_column_default :users, :skip_sign_in_token, nil
  end
end
