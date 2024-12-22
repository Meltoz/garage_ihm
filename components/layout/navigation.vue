<script setup lang="ts">
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const isOpen = ref(false);

const navs = [{
  href: '/annonces',
  label: 'Annonces',
},{
  href: '/contact',
  label: 'Nous contacter'
},{
  href: '/services',
  label: 'Services'
}];
</script>

<template>
  <nav class="bg-gray-800">
    <div class="container mx-auto flex justify-between items-center py-4 px-3 text-white">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold">CarMarket</NuxtLink>
      </div>
      <ul class="hidden md:flex justify-around w-4/12">
        <li v-for="nav in navs" :key="nav.label">
          <NuxtLink  :to="nav.href">{{nav.label}}</NuxtLink>
        </li>
      </ul>

      <div class="md:hidden" @click="isOpen = !isOpen" >
        <Menu color="white" :size="36"/>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden text-white">
      <NuxtLink v-for="nav in navs" :key="nav.label" :to="nav.href" class="block px-6 py-2">{{nav.label}}</NuxtLink>
    </div>
  </nav>
</template>