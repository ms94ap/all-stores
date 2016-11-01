class StoresController < ApplicationController


	def index
   		@stores = Store.all
   		render json: @stores
 	end

	def show
		@store = Store.find(params[:id])
		render json: @store
	end

	def create
		@store = Store.find_or_create_by(store_params)
		if @store.save
			render json: @store
		else
			render json: {errors: @store.errors.full_messages, status: :uprocessable_entity}
		end
	end

	def update
		@store = Store.find(params[:id])
		if @store.update(store_params)
    		render json: @store
    	else
    		render json: {errors: @store.errors.full_messages, status: :uprocessable_entity}
    	end
	end


	def destroy
		@store = Store.find(params["id"])
   		@store.destroy
	end

	private

	def store_params
		params.require(:store).permit(:name, :address, :email, :location, :phone, :country)
		
	end

end