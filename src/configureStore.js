import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

// By exporting configureStore instead of just store, we will be able to create as many store instances as we want for testing.
const configureStore = () => {
  const thunk = store => next => action =>
    typeof action === "function" ? action(store.dispatch) : next(action);
  // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];
  const store = createStore(
    rootReducer,
    // persisted state goes here,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
