import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quotes">About </Link>
    </nav>
  );
}

export default NavBar;
