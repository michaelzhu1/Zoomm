# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :text
#  profile_img_url :string
#  cover_img_url   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :photos,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :follows,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followings,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followees,
    through: :followings,
    source: :followee

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
