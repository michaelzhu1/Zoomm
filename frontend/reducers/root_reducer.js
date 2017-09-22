import { combineReducers } from "redux";
import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./session_reducer";
import ProfileReducer from "./profile_reducer";
import PhotoReducer from "./photo_reducer";


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  user: ProfileReducer,
  photos: PhotoReducer
});

export default RootReducer;
