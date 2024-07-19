// src/services/authService.js
import axios from 'axios';
import store from '../store';

const API_URL = 'http://localhost:3000/users'; // URL de votre serveur JSON Server

const login = async (credentials) => {
  const response = await axios.get(`${API_URL}?email=${credentials.email}&password=${credentials.password}`);
  
  if (response.data.length > 0) {
    const token = 'dummy-token'; // Simuler un token d'authentification
    localStorage.setItem('authToken', token);
    store.setAuthenticated(true, response.data[0]);
    console.log(`Token generated: ${token}`); // Afficher le token dans la console
    return response.data[0]; // Retourner l'utilisateur trouvé
  } else {
    throw new Error('Invalid credentials'); // Lever une erreur si les informations sont invalides
  }
};

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('authToken');
  store.setAuthenticated(false, null);
};

export default {
  login,
  register,
  logout
};
