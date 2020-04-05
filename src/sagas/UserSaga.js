/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from "redux-saga/effects";
import UserActions from "../redux/UserRedux";

export function* loginRequest(api, action) {
  console.log("User Sign In Saga started...");
  const { email, password } = action;

  //TODO make some request to backend
  // const response = yield call(api.loginRequest, email, password);

  //TODO check response is OK?
  if (true) {
    try {
      yield put(
        UserActions.loginRequestSuccess({
          user: {
            userName: "userName",
            basket: [],
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}
