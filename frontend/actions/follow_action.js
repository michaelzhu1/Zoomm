import * as APIUtil from "../util/follows_api_util";

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const deleteFollow = follow => ({
  type: DELETE_FOLLOW,
  follow
});

export const fetchFollows = () => dispatch =>
  APIUtil.getFollows().then(follows => dispatch(receiveFollows(follows)));

export const follow = id => dispatch =>
  APIUtil.postFollow(id).then(following => dispatch(receiveFollow(following)));

export const unfollow = id => dispatch =>
  APIUtil.deleteFollow(id).then(following => dispatch(deleteFollow(following)));
