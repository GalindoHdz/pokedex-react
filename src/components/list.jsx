import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/card';

export const List = (props) => {
  // Listas temporales de pokedex y likes, State index de la lista  
  const [indexList, setIndexList] = useState(11);
  const pokedex = useSelector((state) => state.TempPokedex.list);
  const likes = useSelector((state) => state.TempLikes.list);

  // Funcion para cargar mas pokemons
  const load = async () => {
    // Posicion actual del scroll en Y
    const y = window.scrollY;

    // Bloqueamos el scroll en la posicion actual
    window.onscroll = () => {
      window.scrollTo(0, y);
    };

    // Aumentamos en index de la lista
    indexList <= 887
      ? setIndexList(indexList + 12)
      : setIndexList(indexList + 5);

    // Desbloquemos el scroll al pasar 100ms
    setTimeout(() => {
      window.onscroll = null;
      window.scrollTo(0, y);
    }, 100);
  };

  return (
    <>
    {
      props.master === 'Home' ? (
        <>
        {pokedex.length !== 0 ? (
          <div className='list'>
            <div className='list-pokedex'>
              {pokedex.map((element, index) =>
                index <= indexList ? (
                  <Card key={element.id} pokemon={element} />
                ) : null
              )}
            </div>
            <div className='list-button'>
              {indexList < pokedex.length ? (
                <button onClick={load}>Cargar mas Pokemons</button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className='list'>
            <div className='list-pokedex'>Sin Pokemons</div>
          </div>
        )}
      </>
      ) : (
        <>
        {likes.length !== 0 ? (
          <div className='list'>
            <div className='list-pokedex'>
              {likes.map((element, index) =>
                index <= indexList ? (
                  <Card key={element.id} pokemon={element} />
                ) : null
              )}
            </div>
            <div className='list-button'>
              {indexList < likes.length ? (
                <button onClick={load}>Cargar mas Pokemons</button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className='list'>
            <div className='list-pokedex'>Sin Pokemons</div>
          </div>
        )}
      </>
      )
    }
    </>
  );
};
