const arrThunk = ({dispatch, getState}) => next => action => {
  // 如果action是函数, 就调用action, 传入dispatch作为回调来实现异步
  if(Array.isArray(action)) {
    return action.forEach(v => dispatch(v));
  }

  // 这里的next就是默认的store.dispatch或者下一个中间件
  return next(action)
}

export default arrThunk;
