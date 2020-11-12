import React, { useState } from 'react';
import { filterPokedex } from '../controllers/filterPokedex';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';

export const Filter = (props) => {
  const [list] = useState(props.list);
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
  
  const [classFilter, setClassFilter] = useState({
    status: false,
    filter_show: 'filter_hide',
  });

  const handleToggle = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: !inputs[target.name],
    });
  };

  const search = () => {
    const filters = [];

    Object.entries(inputs).map((element) =>
      element[1] === true ? filters.push(element[0]) : null
    );

    props.handledFilter(filterPokedex(list, filters));
  };

  const restore = () => {
    props.handledFilter(list);
  };

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

  return (
    <div className={classFilter.filter_show}>
      <div className='filter-container'>
        <p className='filter-title'>Tipo</p>
        <div className='filter-options'>
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
        </div>
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
        {
          classFilter.status ? (
            <button onClick={show}>
              Ocultar búsqueda avanzada
              <IoIosArrowDropupCircle className='icon' />
            </button>
          ) : (
            <button onClick={show}>
              Mostrar búsqueda avanzada
              <IoIosArrowDropdownCircle className='icon' />
            </button>
          ) 
        }
      </div>
    </div>
  );
};
