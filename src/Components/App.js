/* eslint-disable react/no-unused-state */
import React, { Component, Fragment } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';
import logic from '../Logic/logic';

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
    const result = logic({ total, next, operation });
    return (
      <>
        <h2 className="title">Welcome to math magicians</h2>
        <div className="app">
          <h4 className="title-2 text-center">The Matrix Calculator</h4>
          <div>
            <Display result={result} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}
