import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.xxx.x.x:3333',
  // baseURL: 'http://localhost:3333',
});
