import React from 'react';
import style from '../style/homemessage.module.scss';

function HomeMessage() {
  return (
    <h1 className={style['home-message']} data-testid="home-messages">
      Welcome back Neo.
    </h1>

  );
}

export default HomeMessage;
