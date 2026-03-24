import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL,
  withCredentials: true
});

export const authApi = {
  register: (payload) => api.post('/auth/register', payload),
  login: (payload) => api.post('/auth/login', payload),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me')
};

export const reservationsApi = {
  list: () => api.get('/reservations'),
  create: (payload) => api.post('/reservations', payload)
};

export const contactApi = {
  create: (payload) => api.post('/contact', payload)
};

export default api;
