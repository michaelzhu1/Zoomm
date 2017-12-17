class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(photo_id: params[:photo_id]).includes(:author)
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 402
    end
  end

  def show

  end

  def update

  end

  def destroy

  end


  private

  def comments_params
    params.require(:comment).permit(:body)
  end
end
