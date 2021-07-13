import React from 'react';
import style from '../style/Quotes.module.scss';

function Quotes() {
  return (
    <div className={style.quotes} data-testid="quote">
      <h2>Unfortunately, no one can be told what the Matrix is. You have to see it for yourself</h2>
      <p>Morpheus</p>
    </div>
  );
}

export default Quotes;
