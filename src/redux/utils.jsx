// Reducer de pokedex
export function Pokedex(state = [], action) {
  switch (action.type) {
    case 'ADD_POKEDEX':
      return action.payload;
    case 'REMOVE_POKEDEX':
      return [];
    default:
      return state;
  }
}

// Reducer de temporal de pokedex
export function TempPokedex(state = [], action) {
  switch (action.type) {
    case 'ADD_TEMP_POKEDEX':
      return action.payload;
    case 'REMOVE_TEMP_POKEDEX':
      return [];
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

// Reducer de temporal de likes
export function TempLikes(state = [], action) {
  switch (action.type) {
    case 'ADD_TEMP_LIKES':
      return action.payload;
    case 'REMOVE_TEMP_LIKES':
      return [];
    default:
      return state;
  }
}