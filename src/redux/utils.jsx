export function Pokedex(state = [], action) {
  switch (action.type) {
    case 'ADD_POKEDEX':
      return action.payload;
    case 'REMOVE_POKEDEX':
      return { list: [] };
    default:
      return state;
  }
}

export function Likes(state = [], action) {
  switch (action.type) {
    case 'ADD_LIKES':
      return action.payload;
    case 'REMOVE_LIKES':
      return [];
    default:
      return state;
  }
}

export function Loading(state = false, action) {
  switch (action.type) {
    case 'ADD_LOADING':
      return action.payload;
    case 'REMOVE_LOADING':
      return false;
    default:
      return state;
  }
}
