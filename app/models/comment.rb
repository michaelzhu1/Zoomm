class Comment < ApplicationRecord
  validates :body, presence: true

  include ActionView::Helpers::DateHelper

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  def posted_time_ago
    time_ago_in_words(self.created_at) + " ago"
  end
end
