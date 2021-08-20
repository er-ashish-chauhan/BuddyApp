import { apiConstants as types } from "../../Theme/AppConstants";

const initialState = {
  notificationsCount: 0,
};

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NOTIFICAIONS_COUNT_SUCCESS:
      return { ...state, notificationsCount: action.payload };
    default:
      return { ...state };
  }
};
