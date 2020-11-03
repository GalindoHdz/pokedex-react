export function Pokedex(state = { index: 1, list: [] }, action) {
    switch (action.type) {
        case 'ADD_POKEDEX':
            return action.payload.value;
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

export function Message(
    state = {
        show: false,
        message: '',
    },
    action
) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return action.payload.value;
        case 'REMOVE_MESSAGE':
            return {
                show: false,
                message: '',
            };
        default:
            return state;
    }
}
