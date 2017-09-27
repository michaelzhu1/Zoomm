# @photos.each do |photo|
#   json.set! photo.id do
#     json.extract! photo, :id, :photo_url, :photo_title, :author_id, :photo_description
#     json.profile_img photo.user.profile_img_url
#     json.username photo.user.username
#   end
# end
