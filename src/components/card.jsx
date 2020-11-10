import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import { NavLink } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

export const Card = (props) => {
  const likes = useSelector((state) => state.Likes);
  const pokedex = useSelector((state) => state.Pokedex);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: pokedex[props.index].id,
    name: pokedex[props.index].name,
    number: pokedex[props.index].number,
    image: pokedex[props.index].image,
    types: pokedex[props.index].types,
    like: pokedex[props.index].like,
  });
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${state.image}`;

  const addLike = () => {
    addLikes(state.id, likes, pokedex, dispatch);
    setState({
      ...state,
      like: !state.like,
    });
  };

  return (
    <div className='card'>
      <NavLink exact to={`/Pokemon/${state.name}`}>
        <img src={image} alt='pokemon'/>
        <div>
          <h5>
            N.°{state.number}
          </h5>
          <h3>
            {state.name}
          </h3>
          <div>
            {state.types.map((type) => (
              <p
                className={type}
                key={`${state.id} ${type}`}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </NavLink>
      <div>
        {state.like ? (
          <button onClick={addLike}>
            <FaHeart />
          </button>
        ) : (
          <button onClick={addLike}>
            <BiHeart />
          </button>
        )}
      </div>
    </div>
  );
};
