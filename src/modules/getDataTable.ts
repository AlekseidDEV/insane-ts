export const getDataTable = () => {
  return fetch("http://localhost:1808/service").then((res) => res.json());
};
