import * as APIUtilUser from "../util/profile_api_util";
import * as APIUtilFollow from "../util/follows_api_util";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";


export const receiveUser = (user) =>
{return {type: RECEIVE_USER,user: user};};



export const modifyUser = user => ({
  type: UPDATE_USER,
  user: user
});


export const fetchUser = (id) => dispatch =>
  APIUtilUser.fetchUser(id).then(user =>
  dispatch(receiveUser(user)));

export const updateUser = (user) => dispatch =>
  APIUtilUser.updateUser(user).then(newuser=>
  dispatch(modifyUser(newuser)));

export const postFollow = follow => dispatch =>
  APIUtilFollow.postFollow(follow).then(user => dispatch(receiveUser(user)));

export const deleteFollow = follow => dispatch =>
  APIUtilFollow.deleteFollow(follow).then(user => dispatch(receiveUser(user)));
