// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'; // Importez le fichier CSS ici
import router from './router'; // Importez le routeur

const app = createApp(App);
app.use(router); // Utilisez le routeur
app.mount('#app');

