class Api::PhotosController < ApplicationController

  before_action :require_logged_in

  def index
    # debugger
    if params[:id]
      @photos = Photo.where("author_id = ?", params[:id])
    else
      @photos = Photo.all
    end
    render "api/photos/index"
  end

  def index_feed
    @photos = [];
    # debugger
    current_user.followings.each do |followee|
      @photos.push(followee.photos)
    end
    @photos = @photos.flatten
    render "api/photos/index"
  end


  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.erros.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: @photo.erros.full_messages, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_title, :photo_description, :author_id, :photo_url)
  end

end
