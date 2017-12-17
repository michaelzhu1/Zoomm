export const getPhotoComments = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`
  })
);
