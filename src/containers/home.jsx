import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { Card } from '../components/card';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Home = () => {
  const [state, setState] = useState({
    index: 11,
    pokedex: useSelector((state) => state.Pokedex),
  });

  const load = async () => {
    state.index < 887
      ? setState({
          ...state,
          index: state.index + 12,
        })
      : setState({
          ...state,
          index: state.index + 5,
        });
  };

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
        {/* {state.pokedex.map((element) => (
          <Card key={element.id} index={element.id - 1} />
        ))} */}
        {/* <div className=''>
          {state.index < 892 ? (
            <button onClick={load} className=''>
              Load more Pokemons
            </button>
          ) : null}
        </div> */}
      </div>
    </div>
  );
};
