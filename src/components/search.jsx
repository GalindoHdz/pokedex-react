import React, { useState } from 'react';
import { findPokemon } from '../controllers/findPokemon';
import { BiSearch } from 'react-icons/bi';

export const Search = (props) => {
  const [state, setState] = useState({
    word: '',
    list: props.list,
  });

  const find = () => {
    state.word
      ? props.handledSearch(findPokemon(state.word, state.list))
      : props.handledSearch(state.list);
  };

  const handledChange = ({ target }) => {
    setState({
      ...state,
      word: target.value,
    });
  };

  const handledKeyPress = (event) => {
    if (event.key === 'Enter') {
      find();
    }
  };

  return (
    <div className='w-full h-12 py-10 flex flex-wrap justify-center content-center bg-gray-700'>
      <label className='mx-2 text-2xl text-white '>Name or number</label>
      <input
        type='text'
        name='pokemon'
        onChange={handledChange}
        onKeyPress={handledKeyPress}
        className='mx-2 h-10 rounded-md focus:outline-none px-2'
      />
      <button
        onClick={find}
        className='w-10 h-10 flex flex-wrap justify-center content-center text-2xl bg-orange-500 text-white'>
        <BiSearch />
      </button>
    </div>
  );
};
