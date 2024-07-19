import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import BlogPage from './components/posts/BlogPage.vue';
import PostDetail from './components/posts/PostDetail.vue'; // Assurez-vous que le chemin est correct
import CreatePost from './components/posts/CreatePost.vue';
import EditPost from './components/posts/EditPost.vue';
import UserPosts from './components/posts/UserPosts.vue';
import UserLogin from './components/authentification/UserLogin.vue';
import UserRegister from './components/authentification/UserRegister.vue';
import AboutPage from './components/AboutPage.vue';

// Import des composants Todo
import TodoList from './components/todos/ListTodo.vue';
import AddTodo from './components/todos/CreateTodo.vue';
import EditTodo from './components/todos/EditTodo.vue'; // Assurez-vous que le chemin est correct

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/blog/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: EditPost,
    props: true
  },
  {
    path: '/user-posts',
    name: 'UserPosts',
    component: UserPosts
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todos/add',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/todos/edit/:id',
    name: 'EditTodo',
    component: EditTodo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
