class CommentsController < ApplicationController

	def show		
	end

	def index
		@comments = Comments.all
		render json: @comments
	end

	def new
		@comment = Comment.new
   		render json: @comment
	end

	def edit
		@comment = Comment.find(params[:id])
      	render json: @comment
		
	end

	def create

		
	end

end
