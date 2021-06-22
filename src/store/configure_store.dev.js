// Library imports
import { createStore, compose, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

// Project imports
import rootReducer from 'reducer_root';

export default function configureStore(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // reduxImmutableStateInvariant(),

    // Redux middleware that allows you to write action creators that return a function instead of an action
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
