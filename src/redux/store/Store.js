// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

// Imports: Redux Root Reducer
import rootReducer from "../../redux";

// Imports: Redux Root Saga
import { rootSaga } from "../../sagas";

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Redux: Store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
