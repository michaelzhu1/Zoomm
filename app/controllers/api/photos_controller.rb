class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_title, :photo_description, :author_id, :photo_url)
  end

end
