import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { List } from '../components/list';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Likes = () => {
  const [state, setState] = useState({
    likes: useSelector((state) => state.Likes),
  });

  const updatePokedex = (list) => {
    setState({
      ...state,
      likes: list,
    });
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <h1>Likes</h1>
        <Search list={state.likes} handledSearch={updatePokedex} />
        <Filter list={state.likes} handledFilter={updatePokedex} />
        <Sort list={state.likes} handledSort={updatePokedex} />
        <List list={state.likes} />
      </div>
    </div>
  );
};
