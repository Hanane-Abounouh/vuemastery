<template>
  <div>
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <div>
        <label for="title">Title</label>
        <input v-model="post.title" type="text" id="title" required />
      </div>
      <div>
        <label for="body">Body</label>
        <textarea v-model="post.body" id="body" required></textarea>
      </div>
      <div>
        <label for="user">User ID</label>
        <input v-model="post.user" type="number" id="user" required />
      </div>
      <div>
        <label for="image">Image URL</label>
        <input v-model="post.image" type="url" id="image" required />
      </div>
      <div>
        <label for="date">Date</label>
        <input v-model="post.date" type="date" id="date" required />
      </div>
      <button type="submit">Update Post</button>
    </form>
  </div>
</template>

<script>
import { getPostById, updatePost } from '../../services/postService';

export default {
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
