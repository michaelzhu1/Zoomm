class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_title, :photo_description, :author_id, :photo_url)
  end

end
