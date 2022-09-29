import axios from 'axios';

export const axiosI = axios.create({
  baseURL: 'https://bon-api.onrender.com/api/v1/',
});
