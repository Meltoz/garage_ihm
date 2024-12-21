<script setup lang="ts">
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
  <NuxtLink to="/annonces" >Les annonces</NuxtLink>
</template>

<style scoped>

</style>