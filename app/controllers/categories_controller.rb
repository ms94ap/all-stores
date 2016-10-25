class CategoriesController < ApplicationController
	def show
	end

	def new
		@comment = Comment.new
   		render json: @comment
	end
	
	def create
		@categories = Category.find_or_create_by(category_params)
		render json: @categories
	
	end

	private
	
	def category_params
	
		params.require(:store).permit(:name)	
	end
	
end