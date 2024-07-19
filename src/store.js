// src/store.js
import { reactive } from 'vue';

const store = reactive({
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: null,

  setAuthenticated(isAuthenticated, user) {
    this.isAuthenticated = isAuthenticated;
    this.user = user;
  },

  logout() {
    this.isAuthenticated = false;
    this.user = null;
    localStorage.removeItem('authToken');
  }
});

export default store;
