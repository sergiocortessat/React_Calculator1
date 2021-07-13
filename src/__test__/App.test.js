import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../Components/Home';
import Calculator from '../Components/Calculator';
import Quotes from '../Components/Quotes';

it('renders correctly the main App program', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <Home />
          <Switch>
            <Route path="/calculator" component={Calculator} />
            <Route path="/quotes" component={Quotes} />
          </Switch>
        </BrowserRouter>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
