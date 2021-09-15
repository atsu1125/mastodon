class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.bigint :account_id, null: false
      t.bigint :target_account_id, null: false

      t.timestamps null: false
    end

    add_index :visits, [:account_id, :target_account_id], unique: true
  end
end
