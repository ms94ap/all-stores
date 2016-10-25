class CommentSerializer < ActiveModel::Serializer
	attributes :content, :id
	has_one :store
end