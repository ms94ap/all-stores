class HomeController < ApplicationController
	def index
    	@stores = Store.all
    		respond_to do |format|
    		format.html { render 'index'}
    		format.json {  render json: @stores }
    	end
 	end

end