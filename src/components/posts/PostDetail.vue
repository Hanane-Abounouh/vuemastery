<template>
  <div id="app" class="py-24 mb-28 mt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-if="post" class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-center mb-6">
          <img :src="post.image" :alt="post.title" class="rounded-lg w-full" />
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <span class="text-sm text-gray-600">{{ post.date }}</span>
        <p class="text-gray-500 leading-8 mt-4 mb-8">{{ post.body }}</p>
        <div class="flex items-center">
          <h6 class="text-sm text-gray-500">By User ID {{ post.user }}</h6>
        </div>
        <router-link to="/blog" class="text-indigo-600 font-semibold mt-4 inline-block">Back to Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPostById } from '../../services/postService';

export default {
  data() {
    return {
      post: null
    };
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      this.post = await getPostById(postId);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
