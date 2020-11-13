// Reducer de pokedex
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

// Reducer de lista de likes
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
