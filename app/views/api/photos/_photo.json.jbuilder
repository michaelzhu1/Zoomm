json.extract! photo, :id, :photo_title, :photo_description, :author_id, :photo_url
json.age time_ago_in_words(photo.created_at)
