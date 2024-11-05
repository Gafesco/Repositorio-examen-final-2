
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/proyectos';

export const getProyectos = async () => {
  return await axios.get(API_URL);
};

export const getProyectoById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createProyecto = async (proyecto) => {
  return await axios.post(API_URL, proyecto);
};

export const updateProyecto = async (id, proyecto) => {
  return await axios.put(`${API_URL}/${id}`, proyecto);
};

export const deleteProyecto = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
