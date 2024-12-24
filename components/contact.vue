<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-800 text-white pb-6">
    <h3 class="text-3xl py-6 px-6">Pour nous contacter</h3>
    <div class="grid grid-cols-2 gap-6 mx-6">
      <div class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, autem consequuntur cupiditate dolor doloremque dolores eius eos et, fugit impedit laboriosam natus non perferendis quo recusandae sed suscipit vitae, voluptate!</div>
      <div class="relative">
        <img src="/imgs/contact.avif">
        <NuxtLink
            to="/contact"
            class="absolute left-1/2 -translate-x-1/2 bg-gray-800 hover:bg-gray-600 px-8 py-4 rounded bottom-16 transition-all duration-200">
          Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>