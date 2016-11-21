class AddStoreIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :store_id, :integer
  end
end
