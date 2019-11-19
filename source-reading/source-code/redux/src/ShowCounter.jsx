import React, { Component } from 'react';

class ShowCounter extends Component {
  render() {
    const { store } = this.props;
    const { counter } = store.getState();
    return (
      <div>
        <h3>计数: {counter}</h3>
      </div>
    );
  }
}

export default ShowCounter;
