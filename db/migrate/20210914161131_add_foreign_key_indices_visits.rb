class AddForeignKeyIndicesVisits < ActiveRecord::Migration[6.1]
  disable_ddl_transaction!

  def change
    add_index :visits, :target_account_id, algorithm: :concurrently
  end
end
