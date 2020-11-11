export const prev = (pokedex, id) => id === 1 ? pokedex[892] : pokedex[id - 2]

export const next = (pokedex, id) => id === 893 ? pokedex[0] : pokedex[id]