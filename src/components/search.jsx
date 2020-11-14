import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findPokemon } from '../controllers/findPokemon';
import { BiSearch } from 'react-icons/bi';

export const Search = (props) => {
  // Lista de pokedex, likes y el dispatch de Redux
  const pokedex = useSelector((state) => state.Pokedex.list);
  const likes = useSelector((state) => state.Likes.list);
  const dispatch = useDispatch();

  // State de la palabra del input
  const [word, setWord] = useState('');

  // Funcion para buscar en las listas
  const find = () => {
    // Si el master es home, guardamos en Redux la pokedex temporal
    if (props.master === 'Home') {
      dispatch({
        type: 'ADD_TEMP_POKEDEX',
        payload: findPokemon(word, pokedex),
      });
    }

    // Si el master es likes, guardamos en Redux los likes temporales
    if (props.master === 'Likes') {
      dispatch({
        type: 'ADD_TEMP_LIKES',
        payload: findPokemon(word, likes),
      });
    }
  };

  // Funcion para guardar la palabra escrita en el input
  const handledChange = ({ target }) => {
    setWord(target.value);
  };

  // Funcion para detectar enter en el input y ejecutar la busqueda
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
