import { Link } from 'react-router-dom'
import React, {Component} from 'react';

const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/issues'>Home</Link></li>
          <li><Link to='/issueEdit/300'>Issue Edit</Link></li>
          <li><Link to='/*'>No found</Link></li>
        </ul>
      </nav>
    </header>)

    export default Header