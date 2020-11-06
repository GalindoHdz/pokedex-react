import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import { NavLink } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

export const Card = (props) => {
  const listLikes = useSelector((state) => state.Likes.list);
  const pokedex = useSelector((state) => state.Pokedex.list);
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
    addLikes(state.id, listLikes, pokedex, dispatch);
    setState({
      ...state,
      like: !state.like,
    });
  };

  return (
    <div className='w-64 mx-2 my-2 rounded overflow-hidden shadow-xl bg-white'>
      <NavLink exact to={`/Pokemon/${state.name}`}>
        <img src={image} alt='pokemon' className='bg-gray-400' />
        <p className='mx-4 my-2 text-sm font-bold text-gray-600'>
          N.°{state.number}
        </p>
        <p className='mx-4 my-0 text-2xl font-bold text-gray-900'>
          {state.name}
        </p>
        <div className='w-full h-10 flex flex-wrap content-center'>
          {state.types.map((type) => (
            <p
              className={`w-20 ml-4 rounded flex flex-wrap content-center justify-center text-xs ${type}`}
              key={`${state.id}+${type}`}>
              {type}
            </p>
          ))}
        </div>
      </NavLink>
      <div className='flex flex-wrap justify-end'>
        {state.like ? (
          <button onClick={addLike} className='m-3 text-2xl focus:outline-none'>
            <FaHeart />
          </button>
        ) : (
          <button
            onClick={addLike}
            className='m-3 text-2xl focus:outline-none '>
            <BiHeart />
          </button>
        )}
      </div>
    </div>
  );
};
