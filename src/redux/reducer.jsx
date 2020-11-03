import { combineReducers } from 'redux';
import { Pokedex, Likes, Loading, Message } from './utils';

const rootReducer = combineReducers({
    Pokedex,
    Likes,
    Loading,
    Message,
});

export default rootReducer;
