import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/auth/login",
});

api.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  config.headers.Authorization = `Bearer ${auth?.access_token}`;
  return config;
});

export default api;
