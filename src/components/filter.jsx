import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterPokedex } from '../controllers/filterPokedex';
import { BiSearch } from 'react-icons/bi';
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';

export const Filter = (props) => {
  // Listas de pokedex y likes, el dispatch de Redux
  const pokedex = useSelector((state) => state.Pokedex.list);
  const likes = useSelector((state) => state.Likes.list);
  const dispatch = useDispatch();

  // State de tipos de pokemon disponibles para filtrar lista
  const [inputs, setInputs] = useState({
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fairy: false,
    fighting: false,
    fire: false,
    flying: false,
    ghost: false,
    grass: false,
    ground: false,
    ice: false,
    normal: false,
    poison: false,
    psychic: false,
    rock: false,
    steel: false,
    water: false,
  });

  // State del estilo css del componente
  const [classFilter, setClassFilter] = useState({
    status: false,
    filter_show: 'filter_hide',
  });

  // Funcion para cambiar el estilo del componente
  const show = () => {
    classFilter.status
      ? setClassFilter({
          ...classFilter,
          status: false,
          filter_show: 'filter_hide',
        })
      : setClassFilter({
          ...classFilter,
          status: true,
          filter_show: 'filter_show',
        });
  };

  // Funcion para cambiar el estado de un tipo
  const handleToggle = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: !inputs[target.name],
    });
  };

  // Funcion para filtrar las listas
  const search = () => {
    // Array para los tipos activados
    const filters = [];

    // Recorremos todos los tipos buscando los que estan activados
    // Guardamos en el Array los tipos activados
    Object.entries(inputs).map((element) =>
      element[1] === true ? filters.push(element[0]) : null
    );

    // Si el master es home, guardamos en Redux la pokedex temporal
    if (props.master === 'Home') {
      dispatch({
        type: 'ADD_TEMP_POKEDEX',
        payload: filterPokedex(pokedex, filters),
      });
    }

    // Si el master es likes, guardamos en Redux los likes temporales
    if (props.master === 'Likes') {
      dispatch({
        type: 'ADD_TEMP_LIKES',
        payload: filterPokedex(likes, filters),
      });
    }
  };

  // Funcion para restaurar los inputs y las litas temporales en Redux
  const restore = () => {
    document.getElementById('filter').reset();

    // Si el master es home, reestablecemos la pokedex temporal
    if (props.master === 'Home') {
      dispatch({
        type: 'ADD_TEMP_POKEDEX',
        payload: pokedex,
      });
    }

    // Si el master es likes, reestablecemos los likes temporales
    if (props.master === 'Likes') {
      dispatch({
        type: 'ADD_TEMP_LIKES',
        payload: likes,
      });
    }
  };

  return (
    <div className={classFilter.filter_show}>
      <div className='filter-container'>
        <p className='filter-title'>Tipo</p>
        <form id='filter' className='filter-options'>
          {Object.keys(inputs).map((key) => (
            <div key={key} className='filter-option'>
              <p className={key}>{key}</p>
              <div>
                <input
                  type='checkbox'
                  name={key}
                  value={key}
                  id={key}
                  onChange={handleToggle}
                />
                <label htmlFor={key}>
                  <p>T</p>
                </label>
              </div>
            </div>
          ))}
        </form>
        <div className='filter-buttons'>
          <button onClick={restore} className='restore'>
            Restablecer
          </button>
          <button onClick={search} className='search'>
            <BiSearch className='icon' />
            Buscar
          </button>
        </div>
      </div>
      <div className='filter-button-show'>
        {classFilter.status ? (
          <button onClick={show}>
            Ocultar búsqueda avanzada
            <IoIosArrowDropupCircle className='icon' />
          </button>
        ) : (
          <button onClick={show}>
            Mostrar búsqueda avanzada
            <IoIosArrowDropdownCircle className='icon' />
          </button>
        )}
      </div>
    </div>
  );
};
