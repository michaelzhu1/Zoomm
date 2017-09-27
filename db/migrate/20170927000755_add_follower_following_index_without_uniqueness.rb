class AddFollowerFollowingIndexWithoutUniqueness < ActiveRecord::Migration[5.1]
  def change
    add_index :follows, :following_id
    add_index :follows, :follower_id
  end
end
