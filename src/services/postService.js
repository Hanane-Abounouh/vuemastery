import axios from 'axios';

const API_URL = 'http://localhost:3000/posts'; // Adresse de votre serveur JSON

export async function getPosts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Rejette l'erreur pour que les composants puissent la gérer
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw error;
  }
}

export async function createPost(post) {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function updatePost(id, post) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with ID ${id}:`, error);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting post with ID ${id}:`, error);
    throw error;
  }
}

// Assurez-vous d'ajouter les fonctions pour les commentaires si elles ne sont pas encore présentes
export async function getCommentsByPostId(postId) {
  try {
    const response = await axios.get(`${API_URL}/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ID ${postId}:`, error);
    throw error;
  }
}

export async function addCommentToPost(comment) {
  try {
    const response = await axios.post(`${API_URL}/${comment.postId}/comments`, comment);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}
