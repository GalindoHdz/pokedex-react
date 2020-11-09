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
    <div className='search-container'>
      <div className='search'>
        <label>Nombre o número</label>
        <div>
          <input
            type='text'
            name='pokemon'
            onChange={handledChange}
            onKeyPress={handledKeyPress}
          />
          <button onClick={find}>
            <BiSearch />
          </button>
        </div>
        <p>
          ¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo,
          debilidad, habilidad y demás datos!
        </p>
      </div>
      <div className='search-text'>
        <p>
          Busca un Pokémon por su nombre o usando su número de la Pokédex
          Nacional.
        </p>
      </div>
    </div>
  );
};
