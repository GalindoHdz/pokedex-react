import React from 'react';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { List } from '../components/list';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Home = () => {
  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <h1>Pokédex</h1>
        <Search master={'Home'} />
        <Filter master={'Home'} />
        <Sort master={'Home'} />
        <List master={'Home'} />
      </div>
    </div>
  );
};
