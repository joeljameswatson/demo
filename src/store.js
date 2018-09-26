import { createStore } from "redux";
import throttle from "lodash/throttle";

import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const store = createStore(
  rootReducer,
  loadState(),
  // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }),
  1000
);

export default store;
