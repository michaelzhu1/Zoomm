import * as APIUtil from "../util/profile_api_util";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";


export const receiveUser = (user) =>
{return {type: RECEIVE_USER,user: user};};



export const modifyUser = user => ({
  type: UPDATE_USER,
  user: user
});


export const fetchUser = (id) => dispatch =>
  APIUtil.fetchUser(id).then(user =>
  dispatch(receiveUser(user)));

export const updateUser = (user) => dispatch =>
  APIUtil.updateUser(user).then(newuser=>
  dispatch(modifyUser(newuser)));
