<script setup lang="ts">
  import type {Car} from "~/models/car";
  import {$fetch} from "ofetch";
  const config = useRuntimeConfig();

  const cars = ref<Car[]>([])

  async function getAllUsers() {
    cars.value = await $fetch('/users', {
      baseURL: config.public.apiBaseUrl,
    });
  }

  async function createCar() {
    const car = {name:'Coucou toi', fuelType:'Electric'};
    return await $fetch('/users', {
      method: 'POST',
      baseURL: config.public.apiBaseUrl,
      body: JSON.stringify(car),
    }).then(async () => {
      await getAllUsers();
    })
  }

  onMounted(async () => {
    await getAllUsers();
  })

</script>

<template>
  <h1 class="text-3xl">Bouh</h1>

  <div v-for="car in cars" :key="car.id">
    {{ car.id }} - {{ car.name }} - {{ car.fuelType }}
  </div>
  <div>
    <button @click="createCar()" class="border border-gray-200 rounded px-4 py-2 hover:bg-gray-100">Add Car</button>
  </div>
  <NuxtLink to="/">Home</NuxtLink>
</template>