class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(photo_id: params[:photo_id]).includes(:author)
  end

  private
  def comments_params
    params.require(:comment).permit(:body)
  end
end
