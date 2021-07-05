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
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (operation === null) {
      result = total;
    } else if (operation === '+/-') {
      if (next === null || next === '0') {
        result = total;
      } else {
        result = next;
      }
    } else if (operation === '%') {
      result = operation ? total : `${total}%`;
    } else if (operation !== '%') {
      result = next ? total + operation + next : total + operation;
    } else {
      result = next === null ? operation : next;
    }
    return (
      <div className="app">
        <h4>Welcome to Math Magicians</h4>
        <Display result={result} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}
