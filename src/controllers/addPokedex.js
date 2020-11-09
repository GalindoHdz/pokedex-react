import PokeApi from '../services/poke-api';

export const addPokedex = async (pokedex, dispatch) => {
  while (pokedex.length < 893) {
    for (let index = pokedex.length + 1; index <= 893; index++) {
      const data = await PokeApi.getPokemon(index);
      const species = await PokeApi.getSpecies(index);
      const chain = species.url
        ? await PokeApi.getEvolutionChain(species.url)
        : null;
      const pokemon = {
        number: numberString(index),
        image: `${numberString(index)}.png`,
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name),
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
        like: false,
        chainEvolution: chain ? extract(chain) : null,
        description: species.description,
      };

      pokedex.push(pokemon);

      if (pokedex.length % 100 === 0) {
        dispatch({
          type: 'ADD_POKEDEX',
          payload: pokedex,
        });
      }

      if (pokedex.length === 893) {
        dispatch({
          type: 'ADD_POKEDEX',
          payload: pokedex,
        });
      }
    }
  }
};

const numberString = (number) => {
  const str = '' + number;
  const pad = '000';
  return pad.substring(0, pad.length - str.length) + str;
};

const extract = (chain) => {
  let evoChain = {
    name: chain.species.name,
    evolution: [],
  };

  if (chain.evolves_to) {
    Object.entries(chain.evolves_to).map((element) =>
      evoChain.evolution.push(extract(element[1]))
    );
  }

  return evoChain;
};
