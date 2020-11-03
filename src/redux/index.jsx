import { createStore } from 'redux';
import Reducer from './reducer';
import { saveState, loadState } from './storage';

export const Store = createStore(
    Reducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(() => {
    saveState(Store.getState());
});
