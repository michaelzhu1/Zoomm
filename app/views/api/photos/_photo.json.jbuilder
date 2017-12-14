json.extract! photo, :id, :photo_title, :photo_description, :author_id, :photo_url
json.age time_ago_in_words(photo.created_at)
json.owner photo.owner.username
json.owner_avatar photo.owner.profile_img_url
