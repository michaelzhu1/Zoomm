class Api::PhotosController < ApplicationController

  before_action :require_logged_in

  def index
    @photos = current_user.photos
    # debugger
    render "api/photos/index"
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_title, :photo_description, :author_id, :photo_url)
  end

end
