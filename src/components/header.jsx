import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='bg-white fixed w-full flex flex-wrap justify-center shadow-xl'>
            <NavLink
                exact
                to='/'
                className='px-10 py-3 text-black text-sm'
                activeClassName='bg-red-600 text-white'
                >
                Home
            </NavLink>
            <NavLink
                exact
                to='/Likes'
                className='px-10 py-3 text-black text-sm'
                activeClassName='bg-red-600 text-white'>
                Likes
            </NavLink>
        </header>
    );
};
