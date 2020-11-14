import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PokeApi from '../services/poke-api';
import { addLikes } from '../controllers/addLike';
import { numberString, prev, next } from '../controllers/toolsPokemon';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowForward,
} from 'react-icons/io';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';
import { Stats } from '../components/stats';
import { FaHeart } from 'react-icons/fa';
import { Circule } from '../components/circule';

export const Pokemon = (props) => {
  // Listas permanentes y temporales de pokedex y likes, dispatch, datos de pokemon, ids de pokemons siguiente y anterior
  // State de like, State de species 
  const pokedex = useSelector((state) => state.Pokedex.list);
  const tempPokedex = useSelector((state) => state.TempPokedex.list);
  const likes = useSelector((state) => state.Likes.list);
  const tempLikes = useSelector((state) => state.TempLikes.list);
  const dispatch = useDispatch();
  const pokemon = pokedex.find((element) => element.name === props.name);
  const pokemonPrev = prev(pokedex, pokemon.id);
  const pokemonNext = next(pokedex, pokemon.id);
  const [like, setLike] = useState(pokemon.like);
  const [species, setSpecies] = useState({
    description: null,
    chainEvolution: []
  });

  // Carga de datos de species para descripcion y cadena de evolucion
  useEffect(() => {
    const extractSpecies = async () => {
      const species = await PokeApi.getSpecies(pokemon.id);
      let chainObject = species.url
        ? await PokeApi.getEvolutionChain(species.url)
        : null;
      chainObject = chainObject ? extractChain(chainObject) : null;
  
      setSpecies({
        chainEvolution: transformChain(chainObject),
        description: species.description,
      });
    }

    const extractChain = (chainObject) => {
      let evoChain = {
        name: chainObject.species.name,
        evolution: [],
      };

      if (chainObject.evolves_to) {
        Object.entries(chainObject.evolves_to).map((element) =>
          evoChain.evolution.push(extractChain(element[1]))
        );
      }

      return evoChain;
    };

    const transformChain = (chainObject) => {
      let chainArray = [];
  
      const extractArray = (obj) => {
        Object.entries(obj).forEach((element) => {
          if (element[0] === 'name') {
            chainArray.push(pokedex.find((pokemon) => pokemon.name === element[1]));
          } else if (element[0] === 'evolution') {
            if (element[1].length !== 0) {
              chainArray.push('arrow');
              extractArray(element[1]);
            }
          } else {
            extractArray(element[1]);
          }
        });
      };
  
      if (chainObject !== null) {
        extractArray(chainObject);
      }
  
      return chainArray;
    };

    extractSpecies();
  }, [pokemon, pokedex]);

  // Funcion para cambiar el State de like
  const addLike = () => {
    addLikes(pokemon.id, likes, pokedex, tempLikes, tempPokedex, dispatch);
    setLike(!like);
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container pokemon'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <div className='pokemon-neighbors'>
          <NavLink exact to={`/Pokemon/${pokemonPrev.name}`}>
            <IoIosArrowDropleftCircle className='pokemon-neighbors-icon' />
            <p className='pokemon-neighbors-number'>{`N.º ${numberString(pokemonPrev.id)}`}</p>
            <p className='pokemon-neighbors-name'>{pokemonPrev.name}</p>
          </NavLink>
          <NavLink exact to={`/Pokemon/${pokemonNext.name}`}>
            <p className='pokemon-neighbors-name'>{pokemonNext.name}</p>
            <p className='pokemon-neighbors-number'>{`N.º ${numberString(pokemonNext.id)}`}</p>
            <IoIosArrowDroprightCircle className='pokemon-neighbors-icon' />
          </NavLink>
        </div>
        <div className='pokemon-details'>
          <div className='pokemon-details-name'>
            <p className='details-name'>{pokemon.name}</p>
            <p className='details-number'>N.° {numberString(pokemon.id)}</p>
          </div>
          <div className='pokemon-details-like'>
            {pokemon.like ? (
              <button onClick={addLike}>
                <FaHeart className='like-true' />
              </button>
            ) : (
              <button onClick={addLike}>
                <FaHeart className='like-false' />
              </button>
            )}
          </div>
          <div className='pokemon-details-basic'>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberString(pokemon.id)}.png`} alt='pokemon' />
            <Stats stats={pokemon.stats} />
          </div>
          <div className='pokemon-details-advance'>
            <p>{species.description}</p>
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
                <div className={type} key={`${pokemon.id} ${type}`}>
                  <p>{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className='pokemon-evolutions'
          style={{ backgroundImage: `url(${bg_white})` }}>
          {species.chainEvolution.map((element, index) =>
            typeof element === 'string' ? (
              <IoIosArrowForward key={index} className='arrow' />
            ) : (
              <Circule key={index} pokemon={element} />
            )
          )}
        </div>
      </div>
    </div>
  )
};
