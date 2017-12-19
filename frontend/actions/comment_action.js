import {
  getPhotoComments,
  postComment,
  removeComment
} from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});


export const deleteComment = ({ comment }) => ({
  type: DELETE_COMMENT,
  comment
});
