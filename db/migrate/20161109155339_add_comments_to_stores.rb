class AddCommentsToStores < ActiveRecord::Migration[5.0]
  def change
    add_column :stores, :comment, :text
  end
end
