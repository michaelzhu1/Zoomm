import { combineReducers } from "redux";
import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./session_reducer";
import ProfileReducer from "./profile_reducer";
const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  user: ProfileReducer
});

export default RootReducer;
