<template>
  <div class="py-12 bg-gray-100">
    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <!-- Article Details -->
      <div class="mb-8">
        <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-6"/>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <p class="text-gray-700 mb-6">{{ post.body }}</p>
        <p class="text-gray-500 text-sm">Published on {{ post.date }} by User ID {{ post.id }}</p>
      </div>

      <!-- Comments Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Comments</h2>
        <div v-if="comments.length > 0">
          <div v-for="comment in comments" :key="comment.id" class="border-t border-gray-300 pt-4">
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
import { getPostById, getCommentsByPostId, addCommentToPost } from '../../services/postService';

export default {
  data() {
    return {
      post: null,
      comments: [],
      newCommentText: ''
    };
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      this.post = await getPostById(postId);
      this.comments = await getCommentsByPostId(postId);
    } catch (error) {
      console.error('Error fetching post or comments:', error);
    }
  },
  methods: {
    async addComment() {
      if (this.newCommentText.trim()) {
        try {
          const newComment = {
            text: this.newCommentText,
            author: 'Anonymous', // You may replace this with the actual user name
            postId: this.post.id
          };
          await addCommentToPost(newComment);
          this.comments.push(newComment);
          this.newCommentText = '';
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
