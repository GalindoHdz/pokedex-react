export const filterPokedex = (pokedex, filters) => {
  let filtered = pokedex;

  Object.values(filters).forEach((filter) => {
    filtered = filtered.filter((pokemon) => {
      return pokemon.types.some((type) => {
        return filter.includes(type);
      });
    });
  });

  return filtered;
};
