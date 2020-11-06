export const sortAZ = (pokedex) =>
  pokedex.sort((a, b) => (a.name > b.name ? 1 : -1));
