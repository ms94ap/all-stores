class AddRatingsToStores < ActiveRecord::Migration[5.0]
  def change
    add_column :stores, :rating, :integer
  end
end
