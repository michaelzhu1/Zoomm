class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  before_action :set_owned_comment, only: [:update, :destroy]

  def index
    @comments = Comment.where(photo_id: params[:photo_id]).includes(:author)
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.includes(:author).find(params[:id])
  end

  def update
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render :show
  end


  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_owned_comment
    @comment = current_user.comments.includes(:author).find_by(id: params[:id])
    render json: ["Comment not found"], status: :not_found unless @comment
  end
end
