export const securedFetch = (url, options = {}) => {
  const token = localStorage.getItem("authToken");

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  });
};
