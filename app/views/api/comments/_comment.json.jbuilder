json.extract! comment, :id, :body, :photo_id, :author_id, :created_at
json.author_username comment.author.username
json.author_img_url comment.author.profile_img_url
json.posted_time_ago comment.posted_time_ago
