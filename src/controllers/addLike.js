// Root para agregar o eliminar pokemon de las listas de redux
export const addLikes = (id, listLikes, pokedex, tempLikes, tempPokedex,  dispatch) => {
  listPermanents(id, listLikes, pokedex, dispatch);
  listTemporals(id, tempLikes, tempPokedex, dispatch);
};

// Funcion para agregar o eliminar pokemon a la listas permanentes
const listPermanents = (id, listLikes, pokedex, dispatch) => {
  // Buscamos y extraemos el pokemon si existe en la lista de likes y en el pokedex
  const like = listLikes.find((element) => element.id === id);
  const pokemon = pokedex.find((element) => element.id === id);
  
  // Invertimos el atributo like del pokemon
  pokemon.like = !pokemon.like;

  // Si existe el pokemon en la lista de likes realizamos lo siguiente
  if (like) {
    // Eliminamos el pokemon de la lista de likes
    listLikes.splice(listLikes.findIndex((element) => element.id === id), 1);

    // Actualizamos el pokemon en la pokedex
    pokedex[pokedex.findIndex((element) => element.id === id)] = pokemon;

    // Actualizamos los likes de Redux
    dispatch({
      type: 'ADD_LIKES',
      payload: listLikes,
    });

    // Actualizamos el pokedex de Redux
    dispatch({
      type: 'ADD_POKEDEX',
      payload: pokedex,
    });

    // Terminamos la operacion de la funcion
    return;
  }

  // En caso de que no exita el pokemon en la lista de likes lo agregamos en la lista
  listLikes.push(pokemon);

  // Ordenamos la lista por ID del pokemon
  listLikes.sort((a, b) => a.id - b.id);
  
  // Actualizamos el pokemon en la Pokedex
  pokedex[pokedex.findIndex((element) => element.id === id)] = pokemon;

  // Actualizamos la lista de likes de Redux
  dispatch({
    type: 'ADD_LIKES',
    payload: listLikes,
  });

  // Actualizamos la pokedex de Redux
  dispatch({
    type: 'ADD_POKEDEX',
    payload: pokedex,
  });
};

// Funcion para agregar o eliminar pokemon a la listas temporales
const listTemporals = (id, listLikes, pokedex, dispatch) => {
  // Buscamos y extraemos el pokemon si existe en la lista de likes y en el pokedex
  const like = listLikes.find((element) => element.id === id);
  const pokemon = pokedex.find((element) => element.id === id);
  
  // Invertimos el atributo like del pokemon
  pokemon.like = !pokemon.like;

  // Si existe el pokemon en la lista de likes realizamos lo siguiente
  if (like) {
    // Eliminamos el pokemon de la lista de likes
    listLikes.splice(listLikes.findIndex((element) => element.id === id), 1);

    // Actualizamos el pokemon en la pokedex
    pokedex[pokedex.findIndex((element) => element.id === id)] = pokemon;

    // Actualizamos los likes de Redux
    dispatch({
      type: 'ADD_TEMP_LIKES',
      payload: listLikes,
    });

    // Actualizamos el pokedex de Redux
    dispatch({
      type: 'ADD_TEMP_POKEDEX',
      payload: pokedex,
    });

    // Terminamos la operacion de la funcion
    return;
  }

  // En caso de que no exita el pokemon en la lista de likes lo agregamos en la lista
  listLikes.push(pokemon);

  // Ordenamos la lista por ID del pokemon
  listLikes.sort((a, b) => a.id - b.id);
  
  // Actualizamos el pokemon en la Pokedex
  pokedex[pokedex.findIndex((element) => element.id === id)] = pokemon;

  // Actualizamos la lista de likes de Redux
  dispatch({
    type: 'ADD_TEMP_LIKES',
    payload: listLikes,
  });

  // Actualizamos la pokedex de Redux
  dispatch({
    type: 'ADD_TEMP_POKEDEX',
    payload: pokedex,
  });
};