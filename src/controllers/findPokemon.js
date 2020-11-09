export const findPokemon = (word, pokedex) => {
  return pokedex.filter(
    (pokemon) =>
      String(pokemon.id).includes(word) || pokemon.name.includes(word)
  );
};
