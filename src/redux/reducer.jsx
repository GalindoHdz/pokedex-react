import { combineReducers } from 'redux';
import { Pokedex, Likes, Loading } from './utils';

const rootReducer = combineReducers({
    Pokedex,
    Likes,
    Loading,
});

export default rootReducer;
