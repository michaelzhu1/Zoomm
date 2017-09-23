import merge from "lodash/merge";
import {RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO} from "../actions/photo_action";

const PhotoReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, state, action.photo);
    default:
      return state;
  }
};

export default PhotoReducer;
