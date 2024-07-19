<!-- src/App.vue -->
<template>
  <div id="app">
    <SiteNavigation />
    <router-view /> <!-- Point de montage pour les composants des routes -->
    <AppFooter />
  </div>
</template>

<script>
import SiteNavigation from './components/layout/SiteNavigation.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  components: {
    SiteNavigation,
    AppFooter
  }
};
</script>

<style>
/* Vos styles globaux */
</style>
