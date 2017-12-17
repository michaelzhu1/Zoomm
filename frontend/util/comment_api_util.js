export const getPhotoComments = photoId =>
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}/comments`
  });

export const postComment = (comment, photoId) =>
  $.ajax({
    method: "POST",
    url: `api/photos/${photoId}/comments`,
    data: { comment }
  });

export const removeComment = commentId =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  });
