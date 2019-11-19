import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from './my-redux';
import thunk from './my-redux-thunk';
import arrThunk from './my-redux-array-thunk';

import App from './App.jsx';
import { counter } from './counter.redux';

const store = createStore(counter, applyMiddleware(thunk, arrThunk));

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();
store.subscribe(render);
