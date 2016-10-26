class Store < ApplicationRecord
	# has_one :comment, optional: true
	belongs_to :category, optional: true
end
