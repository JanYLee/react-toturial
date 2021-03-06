// import { createStore, applyMiddleware } from './offical-redux-src';
// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from './my-redux';
import arrThunk from './my-redux-array-thunk';
import thunk from './my-redux-thunk';

// reducer 函数
// 用于初始化和更新store
// 根据老的state和action 生成新的state
function counter(state = 10, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'delete':
      return state - 1;
    default:
      return state;
  }
}

// 新建store
const store = createStore(counter, applyMiddleware(thunk, arrThunk));

const init = store.getState();
console.log('init :', init); // init : 10

// 监听事件, 当数据发生改变时的业务逻辑
function listener() {
  const curStore = store.getState();
  console.log(`now store is ${curStore}`);
}

// 监听每次修改store
store.subscribe(listener);

// 派发事件 传递action
const addCounter = () => ({ type: 'add' });
const deleteCounter = () => ({ type: 'delete' });
const asyncAddCounter = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'add' });
  }, 1000);
};

const addDoubleCounter = () => [{ type: 'add' }, { type: 'add' }];

store.dispatch(addCounter()); // now store is 11
store.dispatch(addCounter()); // now store is 12
store.dispatch(deleteCounter()); // now store is 11
store.dispatch(addDoubleCounter()); // now store is 12 now store is 13
store.dispatch(asyncAddCounter()); // now store is 14
