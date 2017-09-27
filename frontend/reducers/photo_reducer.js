import merge from "lodash/merge";
import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  DELETE_PHOTO,
  UPDATE_PHOTO
} from "../actions/photo_action";

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      // debugger
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    case DELETE_PHOTO:
      let nextState = merge({}, state);
      delete nextState[action.photo.id];
      return nextState;
    default:
      return state;
  }
};

export default PhotoReducer;
