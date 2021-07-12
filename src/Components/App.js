import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quotes from './Quotes';
import Calculator from './Calculator';

function App() {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </>
  );
}

export default App;
