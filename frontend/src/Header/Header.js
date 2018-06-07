import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Agents from '../Agents/Agents';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div>
          <div className='title-img'>
            <h1>DENVER SUMMIT GROUP</h1>
            <img id='kw' src='https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/3568/files/2017/02/homepage-logo.png'/>
          </div>
          <div className='nav-links'>
            <NavLink to='/agents' className='nav'>Agents</NavLink>
            <NavLink to='/agents' className='nav'>Properties</NavLink>
            <NavLink to='/agents' className='nav'>Buyers/Sellers</NavLink>
            <NavLink to='/agents' className='nav'>Communities</NavLink>
            <NavLink to='/agents' className='nav'>Resources</NavLink>
            <NavLink to='/agents' className='nav'>Contact</NavLink>
          </div>
        </div>
        <div className='component'>
          <Route exact path='/agents' component={Agents}/>
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