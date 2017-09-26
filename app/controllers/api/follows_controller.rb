class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @followee_ids = current_user.followees.idea
    render json: @followee_ids
  end

  def destroy
    @follow = Follow.find_by(following_id: follow_params[:following_id], follower_id: current_user.id)
    @follow.destroy
    render json: @follow 
  end

  def follow_params
    params.require(:follow).permit(:following_id)
  end
end
