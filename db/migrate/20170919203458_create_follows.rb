class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :following_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end
    add_index :follows, :following_id, unique: true
    add_index :follows, :follower_id,  unique: true 
  end
end
