import axios from "axios";
import storage from "../utils/storage";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 3000,
});

// Richiesta in uscita aggiungiamo l'accessToken se lo abbiamo
instance.interceptors.request.use(function (config) {
  const token = storage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
// Richiesta in entrare verifichiamo lo status, se è 401/403 redirect alla login page
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { protocol, hostname, port } = window.location;

    if ([401, 403].includes(error.response.status))
      window.location.href = `${protocol}//${hostname}:${port}/`;

    return Promise.reject(error);
  }
);
export default instance;
