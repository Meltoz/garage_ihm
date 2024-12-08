<script setup lang="ts">
  import type {Car} from "~/models/car";
  const config = useRuntimeConfig();

  const cars = ref<Car[]>([])

  async function getAllUsers(): Promise<Car[]> {
    return await $fetch('/users', {
      baseURL: config.public.apiBaseUrl,
    });
  }

  onMounted(async () => {
    cars.value = await getAllUsers();
  })

</script>

<template>
  <h1 class="text-3xl">Bouh</h1>

  <div v-for="car in cars" :key="car.id">
    {{ car.id }} - {{car.createdAt}}
  </div>
  <NuxtLink to="/">Home</NuxtLink>
</template>