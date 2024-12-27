<template>
  <div class="pb-24">
    <h3 class="text-3xl py-6 px-6">Découvrez nos services</h3>
    <div class="grid grid-cols-2 gap-6 mx-6">
      <div class="relative">
        <img src="/imgs/garage.avif" class="rounded">
        <NuxtLink
            class="absolute left-1/2 -translate-x-1/2 bg-gray-800 hover:bg-gray-600 px-8 py-4 rounded bottom-16 transition-all duration-200 text-white"
            to="/services">Nos services
        </NuxtLink>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere fugiat id, optio sint tempora
          unde. Alias dolore dolores dolorum, eligendi eos id in inventore quaerat quam quasi unde vero!</p>
      </div>
    </div>
  </div>
</template>