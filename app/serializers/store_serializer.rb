class StoreSerializer < ActiveModel::Serializer
	attributes :name, :address, :email, :location, :phone, :country, :id, :rating
	has_many :comments
	
end