import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_action";

const SessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      let nextState = Object.assign({},{currentUser});
      return nextState;
    default:
      return oldState;
  }
};

export default SessionReducer;
