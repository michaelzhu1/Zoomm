import {
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  DELETE_FOLLOW
} from "../actions/follow_action";
const FollowReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      return state.concat([action.follow.following_id]);
    case DELETE_FOLLOW:
      return state.filter(
        followingId => followingId !== action.follow.following_id
      );
    default:
      return state;
  }
};

export default FollowReducer;
