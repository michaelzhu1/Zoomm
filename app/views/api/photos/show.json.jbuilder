json.partial! 'api/photos/photo', photo: @photo

json.comments do
  json.array! @photo.comments do |comment|
    json.partial! 'api/comments/comment', comment: comment
  end
end
