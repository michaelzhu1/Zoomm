json.array!(@photos) do |photo|
  json.partial! 'api/photos/photos', photo: photo
end
