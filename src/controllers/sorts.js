// Funcion para ordenar pokedex de numero menor a mayor
export const sortBottom = (list) => list.sort((a, b) => a.id - b.id);

// Funcion para ordenar pokedex de numero mayor a menor
export const sortTop = (list) => list.sort((a, b) => b.id - a.id);

// Funcion para ordenar pokedex en orden alfabetico
export const sortAZ = (list) => list.sort((a, b) => (a.name > b.name ? 1 : -1));

// Funcion para ordenar pokedex en orden alfabetico invertido
export const sortZA = (list) => list.sort((a, b) => (b.name > a.name ? 1 : -1));

// Funcion para ordenar pokedex por altura mas baja a mas alta
export const sortHeightBottom = (list) =>
  list.sort((a, b) => a.height - b.height);

// Funcion para ordenar pokedex por altura mas alta a mas baja
export const sortHeightTop = (list) => list.sort((a, b) => b.height - a.height);

// Funcion para ordenar pokedex por peso mas bajo a mas alto
export const sortWeightBottom = (list) =>
  list.sort((a, b) => a.weight - b.weight);

// Funcion para ordenar pokedex por peso mas alto a mas bajo
export const sortWeightTop = (list) => list.sort((a, b) => b.weight - a.weight);

// Funcion para ordenar pokedex de forma aleatoria
export const sortRandom = (list) => list.sort(() => 0.5 - Math.random());
