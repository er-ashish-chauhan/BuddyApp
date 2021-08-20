import { apiConstants as types } from "../../Theme/AppConstants";

// Login Action
export const updateNotificationsCount = (count) => ({
  type: types.UPDATE_NOTIFICAIONS_COUNT,
  payload: count,
});
