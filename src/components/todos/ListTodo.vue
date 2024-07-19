<template>
  <div class="container px-20 w-[50%] mx-auto mb-36 mt-48">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Todo List</h2>
      <router-link to="/todos/add" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
        Add Todo
      </router-link>
    </div>
    <div v-if="todos.length === 0" class="text-gray-500 dark:text-gray-400">
      No todos available.
    </div>
    <ul v-else class="space-y-4">
      <li v-for="todo in todos" :key="todo.id" class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 flex justify-between items-center">
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ todo.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mt-1">{{ todo.completed ? 'Completed' : 'Not completed' }}</p>
        </div>
        <div class="flex space-x-4">
          <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <i class="fas fa-edit"></i> Edit
          </router-link>
          <button @click="deleteTodo(todo.id)" class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500">
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListTodo',
  data() {
    return {
      todos: []
    };
  },
  async created() {
    await this.loadTodos();
  },
  methods: {
    async loadTodos() {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        this.todos = response.data;
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
