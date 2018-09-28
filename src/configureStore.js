import { createStore } from "redux";

import rootReducer from "./reducers";

const addPromiseSupportToStore = store => {
  const rawDispatch = store.dispatch;
  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

// By exporting configureStore instead of just store, we will be able to create as many store instances as we want for testing.
const configureStore = () => {
  const store = createStore(
    rootReducer,
    // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch = addPromiseSupportToStore(store);

  return store;
};

export default configureStore;
