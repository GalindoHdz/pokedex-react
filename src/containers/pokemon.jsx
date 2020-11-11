import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import { prev, next } from '../controllers/neighbors';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';
import { Stats } from '../components/stats';

export const Pokemon = (props) => {
  const pokedex = useSelector((state) => state.Pokedex);
  const pokemon = pokedex.find((element) => element.name === props.name);
  const likes = useSelector((state) => state.Likes);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.image}`;
  const pokemonPrev = prev(pokedex, pokemon.id);
  const pokemonNext = next(pokedex, pokemon.id);
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    like: pokemon.like,
  });

  useEffect(() => {
    setState({
      like: !pokemon.like,
    });
  }, [pokemon]);

  const addLike = () => {
    addLikes(pokemon.id, likes, pokedex, dispatch);
    setState({
      like: !state.like,
    });
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container pokemon'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <div className='pokemon-neighbors'>
          <NavLink exact to={`/Pokemon/${pokemonPrev.name}`}>
            <IoIosArrowDropleftCircle className='pokemon-neighbors-icon'/>
            <p className='pokemon-neighbors-number'>{`N.º${pokemonPrev.number}`}</p>
            <p className='pokemon-neighbors-name'>{pokemonPrev.name}</p>
          </NavLink>
          <NavLink exact to={`/Pokemon/${pokemonNext.name}`}>
            <p className='pokemon-neighbors-name'>{pokemonNext.name}</p>
            <p className='pokemon-neighbors-number'>{`N.º${pokemonNext.number}`}</p>
            <IoIosArrowDroprightCircle className='pokemon-neighbors-icon'/>
          </NavLink>
        </div>
        <div className='pokemon-details'>
          <div className='pokemon-details-name'>
            <p className='details-name'>{pokemon.name}</p>
            <p className='details-number'>N.°{pokemon.number}</p>
          </div>
          <div className='pokemon-details-basic'>
            <img src={image} alt='pokemon' />
            <Stats stats={pokemon.stats}/>
          </div>
          <div className='pokemon-details-advance'>
              <p>{pokemon.description}</p>
              <div className='description-details-advance-block'>
                <div>
                  <h4>height</h4>
                  <p>{pokemon.height} dm</p>
                </div>
                <div>
                  <h4>weight</h4>
                  <p>{pokemon.weight} gr</p>
                </div>
              </div>
              <p>Tipo</p>
              <div className='description-details-advance-types'>
                {pokemon.types.map((type) => (
                  <div
                    className={type}
                    key={`${state.id} ${type}`}>
                    <p>{type}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>



        
        
      
        {/* {state.like ? (
          <button onClick={addLike}>addLike</button>
        ) : (
          <button onClick={addLike}>removeLike</button>
        )} */}
      </div>
    </div>
  );
};
