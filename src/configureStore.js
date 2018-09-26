import { createStore } from "redux";
import throttle from "lodash/throttle";

import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

// By exporting configureStore instead of just store, we will be able to create as many store instances as we want for testing.
const configureStore = () => {
  const persitedState = loadState();
  const store = createStore(
    rootReducer,
    persitedState,
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

  return store;
};

export default configureStore;
