import axios from './axios';

export const getShootersRequest = () => axios.get('/shooters');

export const getShooterRequest = (id) => axios.get(`/shooters/${id}`);

export const createShooterRequest = (shooter) => axios.post(`/shooters`, shooter);

export const deleteShooterRequest = (id) => axios.delete(`/shooters/${id}`);

export const updateShooterRequest = (id, shooter) => axios.put(`/shooters/${id}`, shooter);