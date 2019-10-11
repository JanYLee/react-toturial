import React, { Component } from 'react';
import Child from './Child.jsx';

class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    console.log('parents contructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('parents getDerivedStateFromProps, prevState', prevState);
    return null;
  }

  shouldComponentUpdate() {
    console.log('parents shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('parents componentDidMount');
  }

  componentWillUnmount() {
    console.log('parents componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('parents getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('parents componentDidUpdate');
  }

  addCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }
  
  render() {
    console.log('parents render');
    const { counter } = this.state;
    return (
      <div onClick={this.addCounter}>
        <Child counter={counter}></Child>
      </div>
    );
  }
}

export default Parents;
