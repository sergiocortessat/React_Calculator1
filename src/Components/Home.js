import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomeMessage from './HomeMessage';
import '../style/HomeTitle.scss';

function Home() {
  return (
    <>
      <NavBar />
      <h2 className="title">Welcome to math magicians</h2>
      <Switch>
        <Route exact path="/" component={HomeMessage} />
      </Switch>
    </>
  );
}

export default Home;
