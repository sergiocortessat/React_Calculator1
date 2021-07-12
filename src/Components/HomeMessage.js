import React from 'react';
import style from '../style/homemessage.module.scss';

function HomeMessage() {
  return (
    <h2 className={style['home-message']}>
      Welcome to MathMatigicians website. As simple place where you can user the Matrix Calculator
    </h2>
  );
}

export default HomeMessage;
