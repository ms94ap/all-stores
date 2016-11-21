class CommentSerializer < ActiveModel::Serializer
	attributes :content, :store_id, :created_at, :id
	
end