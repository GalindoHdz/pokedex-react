// Funcion para filtrar pokemons por los tipos
export const filterPokedex = (pokedex, filters) => {
  Object.values(filters).forEach((filter) => {
    pokedex = pokedex.filter((pokemon) => {
      return pokemon.types.some((type) => {
        return filter.includes(type);
      });
    });
  });

  return pokedex;
};
