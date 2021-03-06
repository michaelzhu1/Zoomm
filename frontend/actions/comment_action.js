import {
  getPhotoComments,
  postComment,
  removeComment
} from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});


export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const requestPhotoComments = photoId => dispatch => (
  getPhotoComments(photoId).then(comments => dispatch(receiveComments(comments)))
);

export const destroyComment = commentId => dispatch => (
  removeComment(commentId).then(comment => dispatch(deleteComment(comment)))
);

export const createComment = (comment, photoId) => dispatch => (
  postComment(comment).then(newComment => dispatch(receiveComment(newComment)))
);
