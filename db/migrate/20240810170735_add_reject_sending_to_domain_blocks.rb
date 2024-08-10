require Rails.root.join('lib', 'mastodon', 'migration_helpers')

class AddRejectSendingToDomainBlocks < ActiveRecord::Migration[6.1]
  include Mastodon::MigrationHelpers

  disable_ddl_transaction!

  def up
    safety_assured { add_column_with_default :domain_blocks, :reject_send_public_unlisted, :boolean, default: false, allow_null: false }
    safety_assured { add_column_with_default :domain_blocks, :reject_send_private, :boolean, default: false, allow_null: false }
  end

  def down
    remove_column :domain_blocks, :reject_send_private
    remove_column :domain_blocks, :reject_send_public_unlisted
  end
end
