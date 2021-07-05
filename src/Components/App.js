/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    const result = Calculate(data, buttonName);
    console.log(result)
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    return (
      <div>
        <h4>Welcome to Math Magicians</h4>
        <Display />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}
