<template>
  <div class="container mx-auto px-48  mt-32">
    <h2 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">My Posts</h2>
    <div v-if="posts.length === 0" class="text-gray-500 dark:text-gray-400">
      No posts available.
    </div>
    <ul v-else class="space-y-4">
      <li v-for="post in posts" :key="post.id" class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ post.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mt-2">{{ post.body }}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-gray-500 dark:text-gray-400">{{ new Date(post.date).toLocaleDateString() }}</span>
          <div class="flex space-x-2">
            <router-link :to="{ name: 'EditPost', params: { id: post.id } }" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              <i class="fas fa-edit"></i>
            </router-link>
            <button @click="deletePost(post.id)" class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts, deletePost } from '../../services/postService';

export default {
  name: 'UserPosts',
  data() {
    return {
      posts: []
    };
  },
  async created() {
    await this.loadPosts();
  },
  methods: {
    async loadPosts() {
      try {
        const posts = await getPosts();
        this.posts = posts.filter(post => post.userId === this.userId);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    },
    async deletePost(postId) {
      try {
        await deletePost(postId);
        this.posts = this.posts.filter(post => post.id !== postId);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  },
  computed: {
    userId() {
      // Suppose that the user ID is stored in localStorage after login
      return localStorage.getItem('userId');
    }
  }
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
