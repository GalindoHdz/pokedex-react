import React, { useState } from 'react';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
import { List } from '../components/list';
import bg_black from '../assets/images/bg-black.png';
import bg_white from '../assets/images/bg-white.png';

export const Likes = () => {
  // Variables para recargar componentes
  const [reload, setReload] = useState({});

  // Funcion para recargar el componente
  const handledReload = () => {
    setReload({...reload});
  }

  return (
    <div className='background' style={{ backgroundImage: `url(${bg_black})` }}>
      <div
        className='container'
        style={{ backgroundImage: `url(${bg_white})` }}>
        <h1>Likes</h1>
        <Search master={'Likes'} />
        <Filter master={'Likes'} />
        <Sort master={'Likes'} reload={handledReload}/>
        <List master={'Like'} />
      </div>
    </div>
  );
};
