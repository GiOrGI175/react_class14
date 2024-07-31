import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/admin'>admin</Link>
        </li>
        <li>
          <Link to='/user'>user</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
