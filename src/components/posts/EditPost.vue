<template>
  <section class="bg-white dark:bg-gray-900 mt-20">
    <div class="py-8 px-4 mx-auto max-w-5xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Post</h2>
      <form @submit.prevent="updatePost">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input v-model="post.title" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type the title" required />
          </div>
          <div class="sm:col-span-2">
            <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
            <textarea v-model="post.body" id="body" rows="8" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type the body" required></textarea>
          </div>
          <div>
            <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
            <input v-model="post.user" type="number" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type the user ID" required />
          </div>
          <div class="sm:col-span-2">
            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
            <input v-model="post.image" type="url" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type the image URL" />
          </div>
          <div class="sm:col-span-2">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input v-model="post.date" type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
          </div>
        </div>
        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800">
          Update Post
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { getPostById, updatePost } from '../../services/postService';

export default {
  name: 'EditPost',
  data() {
    return {
      post: {
        title: '',
        body: '',
        user: '',
        image: '',
        date: ''
      }
    };
  },
  async created() {
    const postId = this.$route.params.id;
    this.post = await getPostById(postId);
  },
  methods: {
    async updatePost() {
      try {
        await updatePost(this.$route.params.id, this.post);
        this.$router.push('/blog');
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
  }
};
</script>

<style scoped>
button {
  background-color: #4f46e5; /* Indigo color */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #4338ca; /* Darker indigo color */
}
</style>
