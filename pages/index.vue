<script setup lang="ts">
import Footer from "../components/layout/footer.vue";
import Services from "../components/services.vue";

useHead({
  title: 'Accueil',
  meta: [{
    name: 'description',
    content: 'Bienvenue sur la page d\'accueil'
  }]
})
</script>

<template>
  <h1>Je suis sur la page</h1>
  <Services />
  <Contact />
  <Footer />
</template>

<style scoped>

</style>