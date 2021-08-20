import { takeLatest, call, put } from "redux-saga/effects";
import axios from "../axios";
import { apiConstants as types } from "../../Theme/AppConstants";
import DataManager from "../../Components/DataManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setClientToken } from "../axios/apiKit";
// import firebaseSDK from '../../../config/firebaseSdk'

// Generator to run when Authentication Failed
function* updateNotificationsCountSaga(action) {
  const { payload } = action;
  yield put({
    type: types.UPDATE_NOTIFICAIONS_COUNT_SUCCESS,
    payload: payload,
  });
}

export default function* notificaitonsSaga() {
  yield takeLatest(
    types.UPDATE_NOTIFICAIONS_COUNT,
    updateNotificationsCountSaga
  );
}
