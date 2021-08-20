import { combineReducers } from "redux";
import { apiConstants } from "../../Theme/AppConstants";
import { authenticationReducer } from "./authenticationReducer";
import { notificationsReducer } from "./notificationsReducer";

const appReducer = combineReducers({
  authenticationReducer,
  notificationsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === apiConstants.API_LOGOUT_LOAD) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
