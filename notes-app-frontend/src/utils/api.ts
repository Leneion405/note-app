import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { LoginResponse, INote } from '../types';

const API: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (email: string, password: string): Promise<LoginResponse> =>
  API.post('/auth/register', { email, password }).then(res => res.data);

export const login = (email: string, password: string): Promise<LoginResponse> =>
  API.post('/auth/login', { email, password }).then(res => res.data);

export const createNote = (title: string, content: string): Promise<INote> =>
  API.post('/notes', { title, content }).then(res => res.data);

export const getNotes = (): Promise<INote[]> =>
  API.get('/notes').then(res => res.data);

export const updateNote = (id: string, title: string, content: string): Promise<INote> =>
  API.put(`/notes/${id}`, { title, content }).then(res => res.data);

export const deleteNote = (id: string): Promise<{ message: string }> =>
  API.delete(`/notes/${id}`).then(res => res.data);

export default API;
