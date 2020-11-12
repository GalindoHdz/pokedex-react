import React, { useState, useEffect } from 'react';
import { Card } from '../components/card';

export const List = (props) => {
  const [state, setState] = useState({
    index: 11,
    list: props.list,
  });

  useEffect(() => {
    setState({
      ...state,
      list: props.list
    });
  }, [props]);

  const load = async () => {
    const y = window.scrollY;

    window.onscroll = () => {
      window.scrollTo(0, y);
    };

    state.index <= 887
      ? setState({
          ...state,
          index: state.index + 12,
        })
      : setState({
          ...state,
          index: state.index + 5,
        });

    setTimeout(() => {
      window.onscroll = null;
      window.scrollTo(0, y);
    }, 100);
  };

  return (
    <>
      {state.list ? (
        <div className='list'>
          <div className='list-pokedex'>
            {state.list.map((element, index) =>
              index <= state.index ? (
                <Card key={element.id} index={element.id - 1} />
              ) : null
            )}
          </div>
          <div className='list-button'>
            {state.index < state.list.length ? (
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
  );
};
