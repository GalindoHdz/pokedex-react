export const addLikes = (id, list, pokedex, dispatch) => {
    const found = list.find((element) => element.id === id);

    if (found) {
        const pokemon = pokedex.find((element) => element.id === id);
        const index = list.findIndex((element) => element.id === id);

        pokemon.like = false;
        list.splice(index, 1);
        pokedex[id - 1] = pokemon;

        list.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }

            return -1;
        });

        dispatch({
            type: 'ADD_LIKES',
            payload: { value: { list } },
        });

        dispatch({
            type: 'ADD_LIST_POKEDEX',
            payload: { value: { list: pokedex } },
        });
    } else {
        const pokemon = pokedex.find((element) => element.id === id);
        pokemon.like = true;
        list.push(pokemon);
        pokedex[id - 1] = pokemon;

        list.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }

            return -1;
        });

        dispatch({
            type: 'ADD_LIKES',
            payload: { value: { list } },
        });

        dispatch({
            type: 'ADD_LIST_POKEDEX',
            payload: { value: { list: pokedex } },
        });
    }
};
