<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { CarList } from '../../models/car.schema';
import {createCarService} from "../../ services/car.service";

const config = useRuntimeConfig();
const carService = createCarService(config);

const cars = ref<CarList>([]);

async function getAllCars() {
  cars.value = await carService.getAllCars();
}

async function createCar() {
  const car = { name: 'Coucou toi', fuelType: 'Electric' };
  await carService.createCar(car);
  await getAllCars();
}

async function deleteCar(id: number) {
  await carService.deleteCar(id);
  await getAllCars();
}

onMounted(async () => {
  await getAllCars();
});
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