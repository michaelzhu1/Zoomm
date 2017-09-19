class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string  :photo_title, null: false
      t.text    :photo_description
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :photos, :author_id, unique: true
  end
end
