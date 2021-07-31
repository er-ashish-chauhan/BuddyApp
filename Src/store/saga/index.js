import { all, fork } from "redux-saga/effects";
import rootAuthenticationSaga from "./authenticationSaga";
export default function* rootSaga() {
  yield all([
    fork(rootAuthenticationSaga),
    ]);
}
