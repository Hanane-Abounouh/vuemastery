<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white px-10 py-8 rounded-xl shadow-xl max-w-sm w-full">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <hr>
        <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input v-model="name" class="pl-2 outline-none border-none w-full" type="text" placeholder="Name" required />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input v-model="email" class="pl-2 outline-none border-none w-full" type="email" placeholder="Email" required />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input v-model="password" class="pl-2 outline-none border-none w-full" type="password" placeholder="Password" required />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input v-model="confirmPassword" class="pl-2 outline-none border-none w-full" type="password" placeholder="Confirm Password" required />
        </div>
      </div>
      <button @click="handleRegister" class="mt-6 w-full bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Register</button>
      <hr>
      <div class="flex justify-center items-center mt-4">
        <span class="text-gray-700 font-medium text-xs text-center">
          Already have an account? <router-link to="/login" class="text-xs ml-2 text-blue-500 font-semibold">Login now &rarr;</router-link>
        </span>
      </div>
      <div class="pt-6 text-base font-semibold leading-7">
        <router-link to="/" class="font-sans text-red-500 text-md hover:text-red-800">&larr; Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../../services/authService'; // Importation correcte du service

export default {
  name: 'UserRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      try {
        const result = await authService.register(userData);
        if (result) {
          alert('User registered successfully');
          this.$router.push('/login');
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert(`An error occurred: ${error.message}`);
      }
    }
  }
};
</script>

<style scoped>
/* Vos styles */
</style>
