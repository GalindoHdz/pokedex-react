import { combineReducers } from 'redux';
import { Pokedex, Likes } from './utils';

// Combinacion de los reducers
const rootReducer = combineReducers({
  Pokedex,
  Likes,
});

export default rootReducer;
