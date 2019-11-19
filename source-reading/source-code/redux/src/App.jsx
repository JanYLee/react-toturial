import React, { Component } from 'react';

import ShowCounter from './ShowCounter.jsx';
import OperateCounter from './OperateCounter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <ShowCounter />
        <OperateCounter />
      </div>
    );
  }
}

export default App;
