export const getPhotoComments = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`,
    method: 'GET'
  })
);

export const postComment = (comment, photoId) => (
  $.ajax({
    url:`api/photos/${photoId}/comments`,
    method: 'POST',
    data: { comment }
  })
);
