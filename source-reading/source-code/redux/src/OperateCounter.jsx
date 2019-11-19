import React, { Component } from 'react';

import {
  addCounter,
  deleteCounter,
  asyncAddCounter,
  addDoubleCounter
} from './counter.redux';

class OperateCounter extends Component {
  render() {
    const { dispatch } = this.props.store;
    return (
      <div>
        <button onClick={() => dispatch(addCounter())}>新增一个</button>
        <button onClick={() => dispatch(deleteCounter())}>减少一个</button>
        <button onClick={() => dispatch(asyncAddCounter())}>
          异步新增一个
        </button>
        <button onClick={() => dispatch(addDoubleCounter())}>新增两个</button>
      </div>
    );
  }
}

export default OperateCounter;
