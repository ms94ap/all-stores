class Store < ApplicationRecord
	has_one :comment
	belongs_to :category
end
