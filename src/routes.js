import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Likes } from './containers/likes';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/Likes' component={() => <Likes />} />
    </Switch>
);
