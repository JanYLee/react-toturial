import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addCounter,
  deleteCounter,
  asyncAddCounter,
  addDoubleCounter
} from './counter.redux';

class OperateCounter extends Component {
  render() {
    const {
      addCounter,
      deleteCounter,
      asyncAddCounter,
      addDoubleCounter
    } = this.props;
    return (
      <div>
        <button onClick={addCounter}>新增一个</button>
        <button onClick={deleteCounter}>减少一个</button>
        <button onClick={asyncAddCounter}>
          异步新增一个
        </button>
        <button onClick={addDoubleCounter}>新增两个</button>
      </div>
    );
  }
}

export default connect(() => ({}), {
  addCounter,
  deleteCounter,
  asyncAddCounter,
  addDoubleCounter
})(OperateCounter);
