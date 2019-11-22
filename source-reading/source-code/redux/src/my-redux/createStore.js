export default function createStore(reducer, enhancer) {
  if (enhancer) return enhancer(createStore)(reducer);
  let currentState = undefined; // 用于store保存数据
  let currentListeners = []; // 用于保存订阅的方法

  const getState = () => currentState; // 获取store

  // 保存订阅方法
  const subscribe = listener => {
    currentListeners.push(listener);
  };

  // 更新store数据, 执行订阅方法
  const dispatch = action => {
    currentState = reducer(currentState, action);
    currentListeners.forEach(v => v());
    return action;
  };

  // 初始化store
  dispatch({ type: `@@redux/INIT${Math.random()}` });

  return { getState, subscribe, dispatch };
}
