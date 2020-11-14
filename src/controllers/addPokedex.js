import PokeApi from '../services/poke-api';

// Funcion para cargar los pokemons en la pokedex
export const addPokedex = async (pokedex, dispatch) => {
  // Si la pokedex no esta completa
  while (pokedex.length < 893) {
    // Se realizan la carga de los pokemons desde el ultimo registrado en la pokedex 
    for (let index = pokedex.length + 1; index <= 893; index++) {
      // Traemos los datos del pokemon en el API
      const data = await PokeApi.getPokemon(index);

      // Extraemos los datos necesarios del pokemon 
      const pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map((type) => type.type.name),
        like: false,
        height: data.height,
        weight: data.weight,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      };

      // Insertamos el pokemon en la pokedex
      pokedex.push(pokemon);

      // Cada 100 pokemons se guarda en Redux
      if (pokedex.length % 100 === 0) {
        // Cargamos la pokedex en redux
        dispatch({
          type: 'ADD_POKEDEX',
          payload: pokedex,
        });

        //Cargamos la pokedex temporal en redux
        dispatch({
          type: 'ADD_TEMP_POKEDEX',
          payload: pokedex,
        });
      }

      // Los ultimmos 93 pokemons se cargan a Redux
      if (pokedex.length === 893) {
        // Cargamos la pokedex en redux
        dispatch({
          type: 'ADD_POKEDEX',
          payload: pokedex,
        });
        
        //Cargamos la pokedex temporal en redux
        dispatch({
          type: 'ADD_TEMP_POKEDEX',
          payload: pokedex,
        });
      }
    }
  }
};