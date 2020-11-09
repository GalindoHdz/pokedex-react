export const saveState = (state) => {
  let data = JSON.stringify(state);
  localStorage.setItem('state', data);
};

export const loadState = () => {
  const data = localStorage.getItem('state');

  if (data) {
    return JSON.parse(data);
  }

  return undefined;
};
