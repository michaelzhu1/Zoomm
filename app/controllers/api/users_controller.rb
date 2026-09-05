class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: :update
  before_action :set_current_user, only: :update

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def update
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :profile_img_url, :cover_img_url)
  end

  def set_current_user
    if current_user.id != params[:id].to_i
      render json: ["You can only update your own profile"], status: :forbidden
    else
      @user = current_user
    end
  end
end
