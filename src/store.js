import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
