import React, { Component } from 'react';

import ShowCounter from './ShowCounter.jsx';
import OperateCounter from './OperateCounter.jsx';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <ShowCounter store={store} />
        <OperateCounter store={store} />
      </div>
    );
  }
}

export default App;
