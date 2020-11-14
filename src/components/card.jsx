import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import { numberString } from '../controllers/toolsPokemon';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

export const Card = (props) => {
  // Listas permanentes y temporales de pokedex y likes, dispatch, State de like
  const pokedex = useSelector((state) => state.Pokedex.list);
  const tempPokedex = useSelector((state) => state.TempPokedex.list);
  const likes = useSelector((state) => state.Likes.list);
  const tempLikes = useSelector((state) => state.TempLikes.list);
  const dispatch = useDispatch();
  const [like, setLike] = useState(props.pokemon.like);

  // Funcion para agregar el pokemon a la lista de likes,
  // agregar el cambio en la pokedex y cambiar el state de like
  const addLike = () => {
    addLikes(props.pokemon.id, likes, pokedex, tempLikes, tempPokedex, dispatch);
    setLike(!like);
  };

  return (
    <div className='card'>
      <NavLink exact to={`/Pokemon/${props.pokemon.name}`}>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberString(props.pokemon.id)}.png`} alt='pokemon' />
        <div>
          <h5>N.°{numberString(props.pokemon.id)}</h5>
          <h3>{props.pokemon.name}</h3>
          <div>
            {props.pokemon.types.map((type) => (
              <p className={type} key={`${props.pokemon.id} ${type}`}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </NavLink>
      <div>
        {like ? (
          <button onClick={addLike}>
            <FaHeart className='like-true' />
          </button>
        ) : (
          <button onClick={addLike}>
            <FaHeart className='like-false' />
          </button>
        )}
      </div>
    </div>
  );
};
