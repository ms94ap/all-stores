class CategorySerializer < ActiveModel::Serializer
	attributes :name, :id
	has_many :stores
	
end