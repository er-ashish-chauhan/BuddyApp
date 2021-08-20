import { all, fork } from "redux-saga/effects";
import rootAuthenticationSaga from "./authenticationSaga";
import notificaitonsSaga from "./notificationsSaga";

export default function* rootSaga() {
  yield all([fork(rootAuthenticationSaga), fork(notificaitonsSaga)]);
}
