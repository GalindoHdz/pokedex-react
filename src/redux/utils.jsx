// Reducer de pokedex
export function Pokedex(state = { list: [] }, action) {
  switch (action.type) {
    case 'ADD_POKEDEX':
      return {
        ...state,
        list: action.payload,
      };
    case 'REMOVE_POKEDEX':
      return { list: [] };
    default:
      return state;
  }
}

// Reducer de temporal de pokedex
export function TempPokedex(state = { list: [] }, action) {
  switch (action.type) {
    case 'ADD_TEMP_POKEDEX':
      return {
        ...state,
        list: action.payload,
      };
    case 'REMOVE_TEMP_POKEDEX':
      return { list: [] };
    default:
      return state;
  }
}

// Reducer de lista de likes
export function Likes(state = { list: [] }, action) {
  switch (action.type) {
    case 'ADD_LIKES':
      return {
        ...state,
        list: action.payload,
      };
    case 'REMOVE_LIKES':
      return { list: [] };
    default:
      return state;
  }
}

// Reducer de temporal de likes
export function TempLikes(state = { list: [] }, action) {
  switch (action.type) {
    case 'ADD_TEMP_LIKES':
      return {
        ...state,
        list: action.payload,
      };
    case 'REMOVE_TEMP_LIKES':
      return { list: [] };
    default:
      return state;
  }
}
