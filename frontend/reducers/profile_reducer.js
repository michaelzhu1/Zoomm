import {RECEIVE_USER, UPDATE_USER} from "../actions/profile_action";
const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
};

export default ProfileReducer;
