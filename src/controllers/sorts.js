export const sortBottom = (list) => list.sort((a, b) => a.id - b.id);

export const sortTop = (list) => list.sort((a, b) => b.id - a.id);

export const sortAZ = (list) => list.sort((a, b) => (a.name > b.name ? 1 : -1));

export const sortZA = (list) => list.sort((a, b) => (b.name > a.name ? 1 : -1));

export const sortHeightBottom = (list) =>
  list.sort((a, b) => a.height - b.height);

export const sortHeightTop = (list) => list.sort((a, b) => b.height - a.height);

export const sortWeightBottom = (list) =>
  list.sort((a, b) => a.weight - b.weight);

export const sortWeightTop = (list) => list.sort((a, b) => b.weight - a.weight);

export const sortRandom = (list) => list.sort(() => Math.random - 0.5);
