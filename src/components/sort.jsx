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
    sortRandom(list);
  };

  return (
    <div className='w-full h-20 flex flex-wrap justify-center content-center  bg-teal-500'>
      <button
        onClick={surprise}
        className='mx-10 px-5 py-3 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none'>
        Surprise me!!
      </button>
      <div className='mx-10 flex flex-wrap justify-center content-center'>
        <select name='select' id='select' onChange={handledChange}>
          <option value=''>Ordenar por...</option>
          <option value='bottom'>bottom</option>
          <option value='top'>top</option>
          <option value='AZ'>AZ</option>
          <option value='ZA'>ZA</option>
          <option value='heightBottom'>heightBottom</option>
          <option value='heightTop'>heightTop</option>
          <option value='weigthBottom'>weigthBottom</option>
          <option value='weigthTop'>weigthTop</option>
        </select>
      </div>
    </div>
  );
};
