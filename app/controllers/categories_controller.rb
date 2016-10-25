class CategoriesController < ApplicationController
	def show
	end

	def new
		@category = Dategory.new
   		render json: @category
	end

	def create
		@category = Category.find_or_create_by(category_params)
		if @category.save
	      render json: @category
	    else
	      render json: @category
		end	
	end

	private
	
	def category_params
	
		params.require(:store).permit(:name)	
	end
	
end