class AddForeignKeysForAccountsVisits < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :visits, :accounts, column: :account_id, on_delete: :cascade, validate: false
    add_foreign_key :visits, :accounts, column: :target_account_id, on_delete: :cascade, validate: false
  end
end

class ValidateAddForeignKeysForAccountsVisits < ActiveRecord::Migration[6.1]
  def change
    validate_foreign_key :visits, :accounts, column: :account_id
    validate_foreign_key :visits, :accounts, column: :target_account_id
  end
end
