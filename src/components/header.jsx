import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <NavLink exact to='/' activeClassName='header-active-button'>
        Pokédex
      </NavLink>
      <NavLink exact to='/Likes' activeClassName='header-active-button'>
        Likes
      </NavLink>
    </header>
  );
};
