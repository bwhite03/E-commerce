import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers/combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default "";
