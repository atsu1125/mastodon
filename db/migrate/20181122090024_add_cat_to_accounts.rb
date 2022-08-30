class AddCatToAccounts < ActiveRecord::Migration[5.2]
  disable_ddl_transaction!

  def up
    add_column :accounts, :cat, :boolean, default: false, null: false
  end

  def down
    safety_assured { remove_column :accounts, :cat, :boolean }
  end
end
