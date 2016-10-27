class StoreSerializer < ActiveModel::Serializer
	attributes :name, :address, :email, :location, :phone, :country, :id
	# has_one :comment
	
end