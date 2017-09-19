# == Schema Information
#
# Table name: photos
#
#  id                :integer          not null, primary key
#  photo_title       :string           not null
#  photo_description :text
#  author_id         :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Photo < ApplicationRecord
end
