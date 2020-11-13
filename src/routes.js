import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from './controllers/addPokedex';
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Likes } from './containers/likes';
import { Pokemon } from './containers/pokemon';

// Enrutador de la app
export const Routes = () => {
  const pokedex = useSelector((state) => state.Pokedex);
  const dispatch = useDispatch();

  // Cargamos la pokedex, si no esta completa
  useEffect(() => {
    const getPokedex = async () => {
      if (pokedex.length < 893) {
        await addPokedex(pokedex, dispatch);

        //Cargamos la pokedex temporal para mostrarla inicialmente
        dispatch({
          type: 'ADD_TEMP_POKEDEX',
          payload: pokedex,
        });
      }
    };

    getPokedex();
  }, [pokedex, dispatch]);

  return (
    <Switch>
      <Route exact path='/' component={() => <Home />} />
      <Route exact path='/Likes' component={() => <Likes />} />
      <Route
        exact
        path='/Pokemon/:name'
        component={(props) => <Pokemon name={props.match.params.name} />}
      />
    </Switch>
  );
};
