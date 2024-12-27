<script setup lang="ts">
import type {Announcement} from "../models/announcement";

defineProps<{
  announcement: Announcement,
}>();
</script>

<template>
  <div class="border border-gray-300 rounded-xl h-fit cursor-pointer hover:bg-gray-100 transition duration-200 px-2 group h-[18.5rem]">
    <h3 class="text-2xl h-16">{{ announcement.title }}</h3>
    <div class="relative overflow-hidden rounded">
      <img src="/imgs/voiture.jpg" alt="car" class="group-hover:scale-110 transition-all duration-200 w-full"/>
    </div>
    <section class="flex justify-between items-center">
      <p class="text-xl">{{ announcement.car.brand }}<span class="text-base"> - {{ announcement.car.model }}</span></p>
    </section>
    <p class="text-sm">{{announcement.car.kilometers}} km</p>
  </div>
</template>
