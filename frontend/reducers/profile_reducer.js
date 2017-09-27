import { RECEIVE_USER, UPDATE_USER } from "../actions/profile_action";

const defaults = {
  username: "",
  bio: "",
  profile_img_url: "",
  cover_img_url: "",
  followers: [],
  followings: []
};

const ProfileReducer = (state = defaults, action) => {
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
