import axios from "axios";

const api = axios.create({
  baseURL:
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn",
});

api.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  config.headers.Authorization = `Bearer ${auth?.access_token}`;
  return config;
});

export default api;
