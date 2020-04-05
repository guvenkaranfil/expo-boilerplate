import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  loginLoad: false,
  loginRequestError: "",
});

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ["email", "password"],
  loginRequestFailure: null,
  loginRequestSuccess: ["payload"],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */

export const loginRequest = (state, action) => {
  const { payload } = action;
  return state.merge({ loginLoad: true, payload: action.payload });
};

export const loginRequestSuccess = (state, action) => {
  return state.merge({ loginLoad: false, user: action.payload });
};

export const loginRequestFailure = (state, payload) => {
  return state.merge({ loginLoad: false, loginRequestError: payload });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
  [Types.LOGIN_REQUEST_FAILURE]: loginRequestFailure,
});
