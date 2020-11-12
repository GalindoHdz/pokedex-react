import React from 'react';
import { NavLink } from 'react-router-dom';

export const Circule = (props) => {
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemon.image}`;

  return (
    <div className='circule'>
      <NavLink exact to={`/Pokemon/${props.pokemon.name}`}>
        <div className='image'>
          <img src={image} alt='pokemon' />
        </div>
        <div>
          <h3>{props.pokemon.name}</h3>
          <h5>N.°{props.pokemon.number}</h5>
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
