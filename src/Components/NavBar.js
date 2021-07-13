import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../style/NavBar.module.scss';

function NavBar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink activeClassName={styles.current} to="/" exact>Home </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.current} to="/calculator" exact>Calculator </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.current} to="/quotes" exact>Quotes </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
