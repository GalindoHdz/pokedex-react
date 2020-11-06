import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/search';
// import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { Card } from '../components/card';

export const Home = () => {
  const [state, setState] = useState({
    index: 11,
    pokedex: useSelector((state) => state.Pokedex.list),
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
    console.log('sort', list);

    setState({
      ...state,
      pokedex: list,
    });
  };

  return (
    <div className='w-full h-full pt-11 flex flex-wrap justify-center bg-gray-700'>
      {/* <Filter />*/}
      <div className='w-4/5 pt-16 flex flex-wrap justify-center bg-white'>
        <h1 className='pb-4 text-2xl font-bold text-gray-800'>Pokedex</h1>
        <Search list={state.pokedex} handledSearch={updatePokedex} />
        <Sort list={state.pokedex} handledSort={updatePokedex} />
        {state.pokedex.map((element, index) =>
          index <= state.index ? (
            <Card key={element.id} index={element.id - 1} />
          ) : null
        )}
      </div>
      <div className='w-full py-10 flex flex-wrap justify-center'>
        {state.index < 892 ? (
          <button
            onClick={load}
            className='px-5 py-3 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none'>
            Load more Pokemons
          </button>
        ) : null}
      </div>
    </div>
  );
};
