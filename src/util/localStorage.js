const getItem = (key) => {
  const obj = localStorage.getItem(key);
  return obj;
};
const setItem = (key, obj) => {
  localStorage.setItem(key, obj);
};
const removeItem = (key) => {
  localStorage.removeItem(key);
};

export default { removeItem, getItem, setItem };
