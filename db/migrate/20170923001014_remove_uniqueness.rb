class RemoveUniqueness < ActiveRecord::Migration[5.1]
  def change
    remove_index :photos, column: :author_id
  end
end
