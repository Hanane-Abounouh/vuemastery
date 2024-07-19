<template>
  <div class="about-us py-16 px-6 mx-auto mt-32 max-w-5xl">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-extrabold mb-6 text-indigo-700">À propos de nous - Gestion de blog</h1>
      <p class="text-xl text-gray-700 leading-relaxed">
        Chez VueMastery, nous sommes spécialisés dans le développement d'applications avancées en Vue.js. Découvrez notre approche unique pour la gestion de blog, incluant la création, les mises à jour, et l'administration des publications.
      </p>
    </div>

    <!-- Vue d'ensemble de la gestion de blog -->
    <section class="mb-16 text-center">
      <h2 class="text-3xl font-semibold mb-6 text-pink-500">Vue d'ensemble de la gestion de blog</h2>
      <p class="text-gray-800 mb-6 leading-relaxed">
        Notre système de gestion de blog simplifie la création, la mise à jour et la gestion des publications. Avec une interface conviviale, vous pouvez maintenir votre blog frais et pertinent en toute simplicité.
      </p>
      <ul class="list-disc pl-6 mx-auto space-y-4 max-w-xl text-left">
        <li class="text-gray-600">Créez et publiez de nouvelles publications facilement.</li>
        <li class="text-gray-600">Mettez à jour le contenu des publications existantes.</li>
        <li class="text-gray-600">Analysez les performances des publications et l'engagement des lecteurs.</li>
      </ul>
    </section>

    <!-- Fonctionnalités de la gestion de blog -->
    <section class="mb-16">
      <h2 class="text-3xl font-semibold text-center mb-8 text-pink-500">Fonctionnalités de notre système de gestion de blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-black">Création de publications</h3>
          <p class="text-gray-700 leading-relaxed">
            Créez de nouvelles publications avec un éditeur de texte enrichi, qui prend en charge la mise en forme, les images, et d'autres médias pour un contenu dynamique.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-black">Gestion des publications</h3>
          <p class="text-gray-700 leading-relaxed">
            Gérez toutes vos publications à partir d'un tableau de bord centralisé. Vous pouvez modifier, supprimer ou mettre à jour les publications facilement.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-black">Analyse des performances</h3>
          <p class="text-gray-700 leading-relaxed">
            Suivez les performances des publications grâce à des outils d'analyse intégrés. Optimisez le contenu en fonction de l'engagement des lecteurs.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>
