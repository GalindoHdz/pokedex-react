import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <NavLink
                exact
                to='/'
                style={{ textDecoration: 'none' }}>
                Home
            </NavLink>
            <NavLink
                exact
                to='/Likes'
                style={{ textDecoration: 'none' }}>
                Likes
            </NavLink>
        </header>
    );
};
