import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from './controllers/addPokedex';
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Likes } from './containers/likes';
import { Pokemon } from './containers/pokemon';

export const Routes = () => {
  const list = useSelector((state) => state.Pokedex.list);
  const index = useSelector((state) => state.Pokedex.index);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      if (list.length < 100) {
        await addPokedex(index, list, dispatch);
      }
    };

    getList();
  }, [list, index, dispatch]);

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
