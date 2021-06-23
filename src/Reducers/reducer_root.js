import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

export default combineReducers({
  // user data is preloaded only for now, so it should have a no op reducer
  user: (state) => state || null,
  common: combineReducers({}),
});
