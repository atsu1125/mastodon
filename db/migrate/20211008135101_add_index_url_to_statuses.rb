class AddIndexURLToStatuses < ActiveRecord::Migration[6.1]
  disable_ddl_transaction!

  def change
    add_index :statuses, :url, algorithm: :concurrently
  end
end
