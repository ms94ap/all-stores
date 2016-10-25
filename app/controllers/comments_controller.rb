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
		@comment = Comment.new(comment_params)
	    if @comment.save
	      render json: @comment
	    else
	      render json: @comment
	    end
	 end

end
