import * as APIUtil from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
);

export const postPhoto = (photo) => dispatch => (
  APIUtil.postPhoto(photo).then(newPhoto => dispatch(receivePhoto(newPhoto)))
);
