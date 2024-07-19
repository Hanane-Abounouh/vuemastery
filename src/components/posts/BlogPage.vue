<template>
  <div id="app">
    <div class="relative h-[400px] mt-24 overflow-hidden bg-[url('https://www.shutterstock.com/image-photo/flat-lay-top-view-womens-260nw-1123748807.jpg')] bg-cover bg-[50%] bg-no-repeat">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mb-6 text-5xl font-bold">Welcome to Blog</h1>
            <h3 class="mb-8 text-3xl font-bold">📑🖍️👇🏻</h3>
          </div>
        </div>
      </div>
    </div>

    <section class="py-24 mb-28 mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our Popular Blogs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="group cursor-pointer border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600"
          >
            <div class="flex items-center mb-6">
              <img :src="post.image" :alt="post.title" class="rounded-lg h-52 w-full" />
            </div>
            <div class="block">
              <span class="text-sm text-gray-600">{{ post.date }}</span>
              <h4 class="text-gray-900 font-medium leading-8 mb-4">{{ post.title }}</h4>
              <p class="text-gray-500 leading-6 mb-8">{{ post.body }}</p>
              <div class="flex items-center justify-between mb-2 font-medium">
                <h6 class="text-sm text-gray-500">By User ID {{ post.id }}</h6>
                <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="cursor-pointer text-ms text-indigo-600 font-semibold">Read more..</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getPosts } from '../../services/postService';

export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      this.posts = await getPosts();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
