class StoresController < ApplicationController


	def index
   		@stores = Store.all
   		render json: @stores
 	end

	def show
		@store = Store.find_by(params[:id])
		render json: @store
	end

	def create
		@store = Store.new(store_params)
		if @store.save
			render json: @store
		else
			render json: {errors: @store.errors.full_messages, status: :uprocessable_entity}
		end
	end

	def update
		@store = Store.find_by(params[:id])
		if @store.update(store_params)
    		render json: @store
    	else
    		render json: {errors: @store.errors.full_messages, status: :uprocessable_entity}
    	end
	end


	def delete
		@store = Store.find_by(params[:id])
   		@store.destroy
	end

	private

	def store_params
		params.require(:store).permit(:name, :address, :email, :location, :phone, :country)
		
	end

end