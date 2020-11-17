// Funcion para transformar el id a un string de 3 digitos
export const numberString = (number) => {
  const str = '' + number;
  const pad = '000';
  return pad.substring(0, pad.length - str.length) + str;
};

// Funcion para obtener el numero anterior del pokedex
export const prev = (pokedex, id) =>
  id === 1 ? pokedex[pokedex.length - 1] : pokedex[id - 2];

// Funcion para obtener el numero siguiente del pokedex
export const next = (pokedex, id) => (id === 893 ? pokedex[0] : pokedex[id]);
