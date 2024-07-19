import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

export function getTodos() {
  return axios.get(API_URL).then(response => response.data);
}

export function createTodo(todo) {
  return axios.post(API_URL, todo);
}

export function updateTodo(todo) {
  return axios.put(`${API_URL}/${todo.id}`, todo);
}

export function deleteTodo(id) {
  return axios.delete(`${API_URL}/${id}`);
}
