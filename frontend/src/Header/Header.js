import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Denver Summit Group</h1>
        <div className='nav-links'>
          <NavLink to='/agents' className='nav'>Agents</NavLink>
          <NavLink to='/agents' className='nav'>Properties</NavLink>
          <NavLink to='/agents' className='nav'>Buyers/Sellers</NavLink>
          <NavLink to='/agents' className='nav'>Communities</NavLink>
          <NavLink to='/agents' className='nav'>Resources</NavLink>
          <NavLink to='/agents' className='nav'>Contact</NavLink>
        </div>
        <div>
          <Route exact path='/agents'/>
          <Route exact path='/properties'/>
          <Route exact path='/buyerssellers'/>
          <Route exact path='/communities'/>
          <Route exact path='/resources'/>
          <Route exact path='/contact'/>
        </div>
      </div>
    );
  }
};

export default Header;