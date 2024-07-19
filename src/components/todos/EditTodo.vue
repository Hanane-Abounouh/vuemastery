<template>
  <div class="container mx-auto w-[60%] px-4 mt-60 mb-48">
    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Edit Todo</h2>
    <form @submit.prevent="updateTodo" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input
          v-model="todo.title"
          type="text"
          id="title"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Enter todo title"
        />
      </div>
      <div>
        <label for="completed" class="block text-sm font-medium text-gray-900 dark:text-white">Completed</label>
        <input
          v-model="todo.completed"
          type="checkbox"
          id="completed"
          class="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800"
      >
        Update Todo
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditTodo',
  data() {
    return {
      todo: {
        id: null,
        title: '',
        userId: 1, // Définir userId par défaut
        completed: false
      }
    };
  },
  async created() {
    await this.loadTodo();
  },
  methods: {
    async loadTodo() {
      try {
        const response = await axios.get(`http://localhost:3000/todos/${this.$route.params.id}`);
        this.todo = response.data;
      } catch (error) {
        console.error('Error loading todo:', error);
      }
    },
    async updateTodo() {
      try {
        await axios.put(`http://localhost:3000/todos/${this.todo.id}`, this.todo);
        this.$router.push('/todos'); // Rediriger vers la liste des todos
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
