import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log('child contructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('child getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate() {
    console.log('child shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('child getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('child componentDidUpdate');
  }
  
  render() {
    const { counter } = this.props;
    console.log('child render, props:', counter);
    return (
      <div>
        { counter }
      </div>
    );
  }
}

export default Child;
