import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import BlogPage from './components/posts/BlogPage.vue';
import PostDetail from './components/posts/PostDetail.vue'; // Assurez-vous de ce chemin
import CreatePost from './components/posts/CreatePost.vue';
import EditPost from './components/posts/EditPost.vue';
import UserPosts from './components/posts/UserPosts.vue';
import UserLogin from './components/authentification/UserLogin.vue';
import UserRegister from './components/authentification/UserRegister.vue';
import AboutPage from './components/AboutPage.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
