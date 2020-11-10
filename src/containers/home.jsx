import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { List } from '../components/list';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Home = () => {
  const [state, setState] = useState({
    pokedex: useSelector((state) => state.Pokedex),
  });

  const updatePokedex = (list) => {
    setState({
      ...state,
      pokedex: list,
    });
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <h1>Pokédex</h1>
        <Search list={state.pokedex} handledSearch={updatePokedex} />
        <Filter list={state.pokedex} handledFilter={updatePokedex} />
        <Sort list={state.pokedex} handledSort={updatePokedex} />
        <List list={state.pokedex} />
      </div>
    </div>
  );
};
