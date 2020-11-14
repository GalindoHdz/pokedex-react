import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  sortBottom,
  sortTop,
  sortAZ,
  sortZA,
  sortHeightBottom,
  sortHeightTop,
  sortWeightBottom,
  sortWeightTop,
  sortRandom,
} from '../controllers/sorts';
import { AiOutlineReload } from 'react-icons/ai';

export const Sort = (props) => {
  // Listas de pokedex y likes, el dispatch de Redux
  const pokedex = useSelector((state) => state.TempPokedex.list);
  const likes = useSelector((state) => state.TempLikes.list);
  const dispatch = useDispatch();

  // Funcion para guardar las listas temporales en Redux
  const handledChange = ({ target }) => {
    // Si el master es home, guardamos en Redux la pokedex temporal
    if (props.master === 'Home') {
      dispatch({
        type: 'ADD_TEMP_POKEDEX',
        payload: sort(target.value, pokedex),
      });
    }

    // Si el master es likes, guardamos en Redux los likes temporales
    if (props.master === 'Likes') {
      dispatch({
        type: 'ADD_TEMP_LIKES',
        payload: sort(target.value, likes),
      });
    }

    // Ejecutando funcion reload del master
    props.reload();
  };

  // Switch para determinar el tipo de ordenamiento
  const sort = (type, list) => {
    switch (type) {
      case 'bottom':
        return sortBottom(list);
      case 'top':
        return sortTop(list);
      case 'AZ':
        return sortAZ(list);
      case 'ZA':
        return sortZA(list);
      case 'heightBottom':
        return sortHeightBottom(list);
      case 'heightTop':
        return sortHeightTop(list);
      case 'weigthTop':
        return sortWeightTop(list);
      case 'weigthBottom':
        return sortWeightBottom(list);
      default:
        return list;
    }
  };

  // Funcion para ordenar de manera aleatoria las listas
  const surprise = () => {
    // Si el master es home, guardamos en Redux la pokedex temporal
    if (props.master === 'Home') {
      dispatch({
        type: 'ADD_TEMP_POKEDEX',
        payload: sortRandom(pokedex),
      });
    }

    // Si el master es likes, guardamos en Redux los likes temporales
    if (props.master === 'Likes') {
      dispatch({
        type: 'ADD_TEMP_LIKES',
        payload: sortRandom(likes),
      });
    }

    // Ejecutando funcion reload del master
    props.reload();
  };

  return (
    <div className='sort'>
      <div>
        <button onClick={surprise} className=''>
          <AiOutlineReload />
          <p>¡Sorpréndeme!</p>
        </button>
        <select name='select' id='select' onChange={handledChange}>
          <option value=''>Ordenar por...</option>
          <option value='bottom'>Numero inferior</option>
          <option value='top'>Numero superior</option>
          <option value='AZ'>A-Z</option>
          <option value='ZA'>Z-A</option>
          <option value='heightBottom'>Tamaño inferior</option>
          <option value='heightTop'>Tamaño superior</option>
          <option value='weigthBottom'>Peso inferior</option>
          <option value='weigthTop'>Peso superior</option>
        </select>
      </div>
    </div>
  );
};
