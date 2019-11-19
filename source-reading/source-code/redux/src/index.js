import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from './my-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from './my-redux-thunk';
import arrThunk from './my-redux-array-thunk';

import App from './App.jsx';
import { counter } from './counter.redux';

const store = createStore(counter, applyMiddleware(thunk, arrThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
