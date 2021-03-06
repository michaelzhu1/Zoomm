export const fetchPhotos = () =>
  $.ajax({
    method: "GET",
    url: "/api/photos"
  });

export const postPhoto = photo =>
  $.ajax({
    method: "POST",
    url: "/api/photos",
    data: { photo }
  });

export const fetchPhoto = id =>
  $.ajax({
    method: "GET",
    url: `api/photo/${id}`
  });

export const removePhoto = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/photos/${id}`
  });

export const updatePhoto = photo =>
  $.ajax({
    method:"PATCH",
    url: `/api/photos/${photo.id}`,
    data: {photo}
  });


export const fetchUserPhotos = (id) => (
  $.ajax({
    method: "GET",
    url: '/api/photos',
    data: {id}
  })
);

export const fetchUserFeed = () => (
  $.ajax({
    method: "GET",
    url: '/api/feed',
  })
);
