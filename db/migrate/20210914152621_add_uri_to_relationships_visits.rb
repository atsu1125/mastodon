class AddUriToRelationshipsVisits < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :uri, :string
  end
end
