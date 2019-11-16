export default function applyMiddleware(middleware) {
  return createStore => (...args) => {
    // ...args 即reducer
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    dispatch = middleware(midApi)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}
