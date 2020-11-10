import React, { useState } from 'react';
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
  const [list] = useState(props.list);

  const handledChange = ({ target }) => {
    switch (target.value) {
      case 'bottom':
        return props.handledSort(sortBottom(list));
      case 'top':
        return props.handledSort(sortTop(list));
      case 'AZ':
        return props.handledSort(sortAZ(list));
      case 'ZA':
        return props.handledSort(sortZA(list));
      case 'heightBottom':
        return props.handledSort(sortHeightBottom(list));
      case 'heightTop':
        return props.handledSort(sortHeightTop(list));
      case 'weigthTop':
        return props.handledSort(sortWeightTop(list));
      case 'weigthBottom':
        return props.handledSort(sortWeightBottom(list));
      default:
        return props.handledSort(list);
    }
  };

  const surprise = () => {
    props.handledSort(sortRandom(list));
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
