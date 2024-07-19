<template>
  <header class="fixed top-0 z-50 w-full h-24 bg-white shadow-md">
    <div class="container flex items-center justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
      <!-- Logo and Navigation -->
      <a href="/" class="flex items-center h-full font-black leading-none">
        <svg class="w-auto h-6 text-indigo-600 fill-current" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd">
            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
          </g>
        </svg>
        <span class="ml-3 text-xl text-gray-800">VueMastery <span class="text-pink-500">.</span></span>
      </a>

      <nav :class="navClass" id="nav">
        <router-link to="/" class="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Home</router-link>
        <router-link to="/blog" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Blog</router-link>
        <router-link to="/about" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">About</router-link>

        <router-link
                to="/todos"
               class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600" >Todos
              </router-link>
          <router-link to="/create" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Create Post</router-link>
            <router-link  to="/user-posts" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">My Posts</router-link>

        <div class="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
          <router-link v-if="!isAuthenticated" to="/login" class="w-full py-3 font-bold text-center text-pink-500">Login</router-link>
          <router-link v-if="!isAuthenticated" to="/register" class="relative inline-block w-full ml-10 px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 font-bold">Get Started</router-link>
             <div v-if="isAuthenticated" class="flex items-center space-x-4">
          <router-link to="/" @click="logout" class="w-full py-3 font-bold text-center text-pink-500">Logout</router-link>
        </div>
        </div>
      </nav>

      <div class="hidden md:flex md:items-end md:flex-row">
        <router-link v-if="!isAuthenticated" to="/login" class="relative z-40 px-6 py-3 mr-0 text-lg font-bold text-pink-500 md:px-5 sm:mr-3 md:mt-0 transition-all duration-300 hover:shadow-xl">Login</router-link>
        <router-link v-if="!isAuthenticated" to="/register" class="relative z-40 inline-block w-auto h-full ml-10 px-8 py-4 text-lg font-bold leading-none text-white transition-all duration-300 bg-indigo-700 rounded shadow-md lg:bg-white border lg:text-indigo-700 hover:shadow-xl">Get Started</router-link>
   
        <router-link v-if="isAuthenticated" to="/" @click="logout" class="relative z-40 px-6 py-3  mr-0 text-lg font-bold text-pink-500 md:px-5 sm:mr-3 md:mt-0 transition-all duration-300 hover:shadow-xl">Logout</router-link>
      </div>

      <div @click="toggleNav" id="nav-mobile-btn" :class="navOpen ? 'close' : ''"  class="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
     <span class="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                <span class="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteNavigation',
  data() {
    return {
      navOpen: false
    };
  },
  computed: {
    navClass() {
      return [
        'absolute', 'fixed', 'top-0', 'left-0', 'z-50', 'flex', 'flex-col', 'items-center', 'justify-between', 'w-full', 'h-64', 'pt-5', 'mt-24', 'text-sm', 'text-gray-800', 'bg-white', 'border-t', 'border-gray-200', 'md:w-auto', 'md:flex-row', 'md:h-24', 'md:bg-transparent', 'md:mt-0', 'md:border-none', 'md:py-0', 'md:flex', 'md:relative', this.navOpen ? 'block' : 'hidden'
      ];
    },
    isAuthenticated() {
      return !!localStorage.getItem('authToken');
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@media (max-width: 1520px) {
  .left-svg {
    display: none;
  }
}

#nav-mobile-btn.close span:first-child {
  transform: rotate(45deg);
  position: relative;
  background: #a0aec0;
}

#nav-mobile-btn.close span:nth-child(2) {
  transform: rotate(-45deg);
  top: -7px;
  background: #a0aec0;
}

@media (max-width: 768px) {
  #nav {
    background: white;
  }

  .left-svg {
    display: none;
  }
}
</style>
