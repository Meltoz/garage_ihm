<template>
  <div>
    <Navigation />
    <NuxtPage />
    <Footer class="mt-24"/>
  </div>
</template>
<script setup lang="ts">
import Navigation from "./components/layout/navigation.vue";
import Footer from "./components/layout/footer.vue";
</script>