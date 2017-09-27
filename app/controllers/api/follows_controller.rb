class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.new(following_id: params[:user_id])
    @follow.follower_id = current_user.id
    if @follow.save
      @user = User.find(params[:user_id])
      render 'api/users/show'
    else
      @user = User.find(params[:user_id])
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(following_id: params[:user_id], follower_id: current_user.id)
    @follow.destroy!
    @user = User.find(params[:user_id])
    render 'api/users/show'
  end
end
