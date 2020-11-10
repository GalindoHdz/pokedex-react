import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Pokemon = (props) => {
  const likes = useSelector((state) => state.Likes);
  const pokedex = useSelector((state) => state.Pokedex);
  const pokemon = pokedex.find((element) => element.name === props.name);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.image}`;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    like: pokemon.like,
  });

  const addLike = () => {
    addLikes(pokemon.id, likes, pokedex, dispatch);
    setState({
      like: !state.like,
    });
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container'
        style={{ backgroundImage: `url(${bg_white})` }}>
        {state.like ? (
          <button onClick={addLike}>removeLike</button>
        ) : (
          <button onClick={addLike}>addLike</button>
        )}
        <div>
          <p>{pokemon.name}</p>
          <p>N.°{pokemon.number}</p>
        </div>
        <div>
          <img src={image} alt='pokemon' />
          <div>
            <p>description: {pokemon.description}</p>
            <p>height: {pokemon.height}</p>
            <p>weight: {pokemon.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
