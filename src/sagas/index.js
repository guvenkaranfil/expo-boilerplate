// Imports: Dependencies
import { all, fork, takeLatest } from "redux-saga/effects";
import API from "../service/Api";

/* ------------- Types ------------- */
import { UserTypes } from "../redux/UserRedux";

/* ------------- Sagas ------------- */
import { loginRequest } from "./UserSaga";

const api = API.create();
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    // Fake api types
    takeLatest(UserTypes.LOGIN_REQUEST, loginRequest, api),
  ]);
}
