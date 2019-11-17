import compose from "./compose";

export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    // ...args 即reducer
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    const middlewareChain = middlewares.map(m => m(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}
