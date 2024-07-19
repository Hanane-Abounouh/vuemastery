// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/'; // URL de votre serveur JSON Server

const login = async (credentials) => {
  // Effectuer la requête sans try/catch
  const response = await axios.get(`${API_URL}users?email=${credentials.email}&password=${credentials.password}`);
  
  if (response.data.length > 0) {
    // Simuler un token d'authentification
    const token = 'dummy-token'; // Remplacez ceci par la logique réelle de génération de token
    localStorage.setItem('authToken', token);
    return response.data[0]; // Retourner l'utilisateur trouvé
  } else {
    throw new Error('Invalid credentials'); // Lever une erreur si les informations sont invalides
  }
};

const register = async (userData) => {
  // Effectuer la requête sans try/catch
  const response = await axios.post(`${API_URL}users`, userData);
  return response.data;
};

export default {
  login,
  register
};
