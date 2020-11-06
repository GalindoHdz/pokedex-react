import React, { useState } from 'react';
import { sortBottom } from '../controllers/sortBottom';
import { sortTop } from '../controllers/sortTop';
import { sortAZ } from '../controllers/sortAZ';
import { sortZA } from '../controllers/sortZA';
import { sortHeightTop } from '../controllers/sortHeightTop';
import { sortHeightBottom } from '../controllers/sortHeightBottom';
import { sortWeightTop } from '../controllers/sortWeightTop';
import { sortWeightBottom } from '../controllers/sortWeightBottom';

export const Sort = (props) => {
  const [state, setState] = useState({
    sort: 'bottom',
    list: props.list,
  });

  const handledChange = ({ target }) => setState(target.value);

  const surprise = () => props.handledSort(sortWeightBottom(state.list));

  const sort = () => {
    switch (state.sort) {
      case 'bottom': {
        return props.handledSort(sortBottom(state.list));
      }
      case 'top': {
        return props.handledSort(sortTop(state.list));
      }
      case 'AZ': {
        console.log(sortAZ(state.list));
        // return props.handledSort(sortAZ(state.list));
      }
      case 'ZA': {
        return props.handledSort(sortZA(state.list));
      }
      case 'heightTop': {
        return props.handledSort(sortHeightTop(state.list));
      }
      case 'heightBottom': {
        return props.handledSort(sortHeightBottom(state.list));
      }
      case 'weigthTop': {
        return props.handledSort(sortWeightTop(state.list));
      }
      case 'weigthBottom': {
        return props.handledSort(sortWeightBottom(state.list));
      }
      default:
        return state.list;
    }
  };

  return (
    <div>
      <button onClick={surprise}>Surprise me!!</button>
      <select name='select' id='select' onChange={handledChange}>
        <option value='bottom'>bottom</option>
        <option value='top'>top</option>
        <option value='AZ'>AZ</option>
        <option value='ZA'>ZA</option>
        <option value='heightTop'>heightTop</option>
        <option value='heightBottom'>heightBottom</option>
        <option value='weigthTop'>weigthTop</option>
        <option value='weigthBottom'>weigthBottom</option>
      </select>
      <button onClick={sort}>Sort</button>
    </div>
  );
};
