class CommentsController < ApplicationController

	


	def new
		@comment = Comment.new
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

	def destroy
		@comment = Comment.find(params["id"])
		@comment.destroy
	end	

	private

	 def comment_params
		params.require(:comment).permit(:content, :store_id)
	end

end
