class AddImageUrlToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :photo_url, :string
  end
end
