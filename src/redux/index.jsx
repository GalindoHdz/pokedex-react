import { createStore } from 'redux';
import Reducer from './reducer';
import { saveState, loadState } from './storage';

// Creacion de Redux
export const Store = createStore(
  Reducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Operacion para guardar los datos en localstorage
Store.subscribe(() => {
  saveState(Store.getState());
});
