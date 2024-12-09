<script setup lang="ts">

  import {$fetch} from "ofetch";
  import type {CarList} from "../../models/car.schema";
  const config = useRuntimeConfig();

  const cars = ref<CarList>([])

  async function getAllUsers() {
    cars.value = (await $fetch('/users', {
      baseURL: config.public.apiBaseUrl,
    })).data;
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

  async function deleteCar(id: number) {
    return await $fetch(`/users/${id}`, {
      method: 'DELETE',
      baseURL: config.public.apiBaseUrl
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
    {{ car.id }} - {{ car.name }} <button @click="deleteCar(car.id)" class="border border-gray-200 rounded px-4 py-2 hover:bg-gray-100 text-red-400">X</button>
  </div>
  <div>
    <button @click="createCar()" class="border border-gray-200 rounded px-4 py-2 hover:bg-gray-100">Add Car</button>
  </div>
  <NuxtLink to="/">Home</NuxtLink>
</template>