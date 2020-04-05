// Imports: Dependencies
import { combineReducers } from "redux";

// Redux: Root Reducer
const rootReducer = combineReducers({
  user: require("./UserRedux").reducer,
});

// Exports
export default rootReducer;
