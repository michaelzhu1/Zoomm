import { START_LOADING } from "../actions/loading_action";
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from "../actions/photo_action";

const _initialState = {
  loading: false
};

const UiReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, { loading: false });
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default UiReducer;
