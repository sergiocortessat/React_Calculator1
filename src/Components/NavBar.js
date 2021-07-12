import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/NavBar.module.scss';

function NavBar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/calculator">Calculator </Link>
        </li>
        <li>
          <Link to="/quotes">Quotes </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
