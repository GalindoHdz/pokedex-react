// Funcion para guardar en localstorage
export const saveState = (state) => {
  let data = JSON.stringify(state);
  localStorage.setItem('state', data);
};

// Funcion para cargar datos a redux del localstorage
export const loadState = () => {
  const data = localStorage.getItem('state');

  if (data) {
    return JSON.parse(data);
  }

  return undefined;
};
