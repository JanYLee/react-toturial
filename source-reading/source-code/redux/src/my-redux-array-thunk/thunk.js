const thunk = ({dispatch, getState}) => next => action => {
  // 如果action是函数, 就调用action, 传入dispatch作为回调来实现异步
  if(typeof action === 'function') return action(dispatch, getState);

  // 这里的next就是默认的store.dispatch或者下一个中间件
  return next(action)
}

export default thunk;
