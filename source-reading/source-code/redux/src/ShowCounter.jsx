import React, { Component } from 'react';
import { connect } from './my-react-redux';

class ShowCounter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h3>计数: {counter}</h3>
      </div>
    );
  }
}

export default connect(state => state, {})(ShowCounter);
