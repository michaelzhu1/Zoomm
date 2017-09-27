class RemoveFollowerFollowingIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :follows, :following_id
    remove_index :follows, :follower_id
  end
end
