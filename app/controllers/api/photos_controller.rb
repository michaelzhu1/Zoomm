class Api::PhotosController < ApplicationController

  before_action :require_logged_in
  before_action :set_owned_photo, only: [:update, :destroy]

  def index
    if params[:id]
      @photos = Photo.where("author_id = ?", params[:id]).includes(:owner)
    else
      @photos = Photo.all.includes(:owner)
    end
    render "api/photos/index"
  end

  def index_feed
    @photos = [];
    current_user.followings.each do |followee|
      @photos.push(followee.photos)
    end
    @photos = @photos.flatten
    render "api/photos/index"
  end


  def create
    @photo = current_user.photos.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @photo = Photo.includes(:owner, comments: :author).find(params[:id])
    render "api/photos/show"
  end

  def destroy
    @photo.destroy
    render "api/photos/show"
  end

  def update
    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_title, :photo_description, :photo_url)
  end

  def set_owned_photo
    @photo = current_user.photos.includes(:owner, comments: :author).find_by(id: params[:id])
    render json: ["Photo not found"], status: :not_found unless @photo
  end

end
