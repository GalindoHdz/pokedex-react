import { combineReducers } from 'redux';
import { Pokedex, TempPokedex, Likes, TempLikes } from './utils';

// Combinacion de los reducers
const rootReducer = combineReducers({
  Pokedex,
  TempPokedex,
  Likes,
  TempLikes,
});

export default rootReducer;
