<script setup lang="ts">
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const isOpen = ref(false);
</script>

<template>
  <nav class="bg-gray-800">
    <div class="container mx-auto flex justify-between items-center py-4 px-5">
      <div>
        <NuxtLink to="/" class="text-white text-2xl font-bold">CarMarket</NuxtLink>
      </div>
      <div class="hidden md:flex justify-evenly w-2/12">
        <NuxtLink to="/annonces" class="text-white">Annonces</NuxtLink>
      </div>

      <div class="md:hidden" @click="isOpen = !isOpen" >
        <Menu color="white" :size="36"/>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden">
      <NuxtLink to="/annonces" class="block text-white py-2 px-6">Annonces</NuxtLink>
    </div>
  </nav>
</template>