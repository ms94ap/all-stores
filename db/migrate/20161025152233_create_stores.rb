class CreateStores < ActiveRecord::Migration[5.0]
  def change
    create_table :stores do |t|
      t.text :name
      t.text :address
      t.string :email
      t.text :location
      t.integer :phone
      t.text :country

      t.timestamps
    end
  end
end
