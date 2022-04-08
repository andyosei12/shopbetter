//info: All redux will happen here. This is where we will generate the store obj.
import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (state) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);
  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
