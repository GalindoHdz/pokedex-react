export const addLikes = (id, list, pokedex, dispatch) => {
  const like = list.find((element) => element.id === id);
  const pokemon = pokedex.find((element) => element.id === id);
  pokemon.like = !pokemon.like;

  if (like) {
    const index = list.findIndex((element) => element.id === id);

    list.splice(index, 1);
    pokedex[id - 1] = pokemon;

    dispatch({
      type: 'ADD_LIKES',
      payload: list,
    });

    dispatch({
      type: 'ADD_LIST_POKEDEX',
      payload: pokedex,
    });

    return;
  }

  list.push(pokemon);
  list.sort((a, b) => a.id - b.id);
  pokedex[id - 1] = pokemon;

  dispatch({
    type: 'ADD_LIKES',
    payload: list,
  });

  dispatch({
    type: 'ADD_LIST_POKEDEX',
    payload: pokedex,
  });
};
