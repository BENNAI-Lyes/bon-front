import axios from 'axios';

export const axiosI = axios.create({
  baseURL: 'https://bon-api.onrender.com/api/v1/',
  // baseURL: 'http://localhost:8000/api/v1/',
});
