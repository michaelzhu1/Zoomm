class AddIndexForPhotos < ActiveRecord::Migration[5.1]
  def change
    add_index :photos, :author_id
  end
end
