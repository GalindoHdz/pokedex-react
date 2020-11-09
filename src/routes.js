import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from './controllers/addPokedex';
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Likes } from './containers/likes';
import { Pokemon } from './containers/pokemon';

export const Routes = () => {
  const pokedex = useSelector((state) => state.Pokedex);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokedex = async () => {
      if (pokedex.length < 893) {
        await addPokedex(pokedex, dispatch);
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
