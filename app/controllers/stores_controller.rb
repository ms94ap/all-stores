class StoresController < ApplicationController


	def index
   		@stores = Product.all
   		render json: @stores
 	end

	def show
		@store = Store.find(params[:id])
		render json: @store
	end

	def create
		@store = Store.find_or_create_by(store_params)
		render json: @store
	end

	def edit
		@store = Store.find(params[:id])
    	render json: @store
		
	end


	def new
		@store = Store.new
   		render json: @store
	end

	def delete
		@store = Store.find(params[:id])
   		@store.destroy
		render json: @store
	end

	private

	def store_params
		params.require(:store).permit(:name, :address, :email, :location, :phone, :country)
		
	end

end