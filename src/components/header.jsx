import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <NavLink
                exact
                to='/'
                style={{ textDecoration: 'none' }}
                activeClassName='header_button_active'>
                Home
            </NavLink>
            <NavLink
                exact
                to='/Likes'
                style={{ textDecoration: 'none' }}
                activeClassName='header_button_active'>
                Likes
            </NavLink>
        </header>
    );
};
