import { createStore } from "redux";
import rootReducer from "./reducers";

const persistedState = {
  todos: [{ id: "0", text: "welcome back", completed: false }]
};

const store = createStore(
  rootReducer,
  persistedState,
  // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
