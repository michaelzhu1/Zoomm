import * as APIUtil from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
});



export const fetchPhotos = () => dispatch =>
  APIUtil.fetchPhotos().then(photos => dispatch(receiveAllPhotos(photos)));

export const postPhoto = photo => dispatch =>
  APIUtil.postPhoto(photo).then(newPhoto => dispatch(receivePhoto(newPhoto)));

export const removePhoto = id => dispatch =>
  APIUtil.removePhoto(id).then(photo => dispatch(deletePhoto(photo)));

export const updatePhoto = photo => dispatch =>
  APIUtil.updatePhoto(photo).then(newPhoto => dispatch(receivePhoto(photo)));

export const fetchUserPhotos = (id) => dispatch =>
  APIUtil.fetchUserPhotos(id).then(photos => dispatch(receiveAllPhotos(photos)));
