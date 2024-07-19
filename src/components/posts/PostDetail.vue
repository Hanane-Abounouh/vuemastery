<template>
  <div class="py-12 bg-gray-100 mt-32">
    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <!-- Article Details -->
      <div class="mb-8" v-if="!loading && post">
        <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-xl object-cover rounded-lg mb-6"/>
        <h1 v-if="post.title" class="text-3xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <p v-if="post.body" class="text-gray-700 mb-6">{{ post.body }}</p>
        <p v-if="post.date" class="text-gray-500 text-sm">
          Published on {{ new Date(post.date).toLocaleDateString() }} by {{ getAuthorName(post.user) }}
        </p>
      </div>
      <div v-else-if="loading">
        <p class="text-gray-500">Loading post details...</p>
      </div>
      <div v-else>
        <p class="text-gray-500">Error loading post details.</p>
      </div>

      <!-- Comments Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Comments</h2>
        <div v-if="filteredComments.length > 0">
          <div v-for="comment in filteredComments" :key="comment.id" class="border-t border-gray-300 pt-4">
            <p class="text-gray-800 font-semibold">{{ comment.author }}</p>
            <p class="text-gray-600">{{ comment.text }}</p>
          </div>
        </div>
        <p v-else class="text-gray-500">No comments yet.</p>
      </div>

      <!-- Add Comment -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Add a Comment</h2>
        <form @submit.prevent="addComment" class="flex flex-col">
          <textarea v-model="newCommentText" placeholder="Write your comment here..." rows="4" class="p-2 border border-gray-300 rounded-lg mb-4"></textarea>
          <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">Add Comment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  data() {
    return {
      post: null,
      comments: [],
      newCommentText: '',
      users: [],
      loading: true,
    };
  },
  computed: {
    filteredComments() {
      return this.comments.filter(comment => comment.postId === this.post.id);
    }
  },
  async created() {
    const postId = this.$route.params.id;
    console.log('Fetching post with ID:', postId);
    try {
      const postResponse = await axios.get(`${API_URL}/posts/${postId}`);
      console.log('Post data:', postResponse.data);
      this.post = postResponse.data;

      const commentsResponse = await axios.get(`${API_URL}/comments`);
      console.log('Comments data:', commentsResponse.data);
      this.comments = commentsResponse.data;

      const usersResponse = await axios.get(`${API_URL}/users`);
      console.log('Users data:', usersResponse.data);
      this.users = usersResponse.data;

      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error.response ? error.response.data : error.message);
      this.loading = false;
    }
  },
  methods: {
    async addComment() {
      if (this.newCommentText.trim() && this.post) {
        try {
          const newComment = {
            text: this.newCommentText,
            author: 'Anonymous',
            postId: this.post.id
          };
          await axios.post(`${API_URL}/comments`, newComment);
          this.comments.push(newComment);
          this.newCommentText = '';
        } catch (error) {
          console.error('Error adding comment:', error.response ? error.response.data : error.message);
        }
      } else if (!this.post) {
        console.error('Post data is not available');
      }
    },
    getAuthorName(userId) {
      const user = this.users.find(user => user.id === userId);
      return user ? user.name : 'Unknown';
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
