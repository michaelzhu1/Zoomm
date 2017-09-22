export const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "/api/photos"
  })
);

export const postPhoto = photo => (
  $.ajax({
    method: "POST",
    url: "/api/photos",
    data: {photo}
  })
);
