export function Pokedex(state = { index: 1, list: [] }, action) {
    switch (action.type) {
        case 'ADD_POKEDEX':
            return action.payload.value;
        case 'ADD_LIST_POKEDEX':
            return { index: state.index, list: action.payload.value.list };
        case 'REMOVE_POKEDEX':
            return { index: 1, list: [] };
        default:
            return state;
    }
}

export function Likes(state = { list: [] }, action) {
    switch (action.type) {
        case 'ADD_LIKES':
            return action.payload.value;
        case 'REMOVE_LIKES':
            return [];
        default:
            return state;
    }
}

export function Loading(state = { value: false }, action) {
    switch (action.type) {
        case 'ADD_LOADING':
            return action.payload.value;
        case 'REMOVE_LOADING':
            return false;
        default:
            return state;
    }
}