import axios from 'axios';

const BASE_URL = 'https://localhost:44367/api/';

const api = axios.create({
  baseURL : BASE_URL,
  withCredentials: true,
  headers : {
    "Content-Type": "application/json",
  }
})

//add authorization header to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})

export default api;