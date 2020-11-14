import React from 'react';
import { NavLink } from 'react-router-dom';
import { numberString } from '../controllers/toolsPokemon';

export const Circule = (props) => {
  return (
    <div className='circule'>
      <NavLink exact to={`/Pokemon/${props.pokemon.name}`}>
        <div className='image'>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberString(props.pokemon.id)}.png`} alt='pokemon' />
        </div>
        <div>
          <h3>{props.pokemon.name}</h3>
          <h5>N.° {numberString(props.pokemon.id)}</h5>
          <div>
            {props.pokemon.types.map((type) => (
              <p className={type} key={`${props.pokemon.id} ${type}`}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </NavLink>
    </div>
  );
};
