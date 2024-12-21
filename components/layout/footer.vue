<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="w-full bg-gray-800 text-white ">
    <div class="h-60"></div>
    <div class="flex justify-around">
      <p>Mentions légales</p>
      <p>Condition d'utilisation</p>
      <p>Meltoz &copy; copyright {{year}}</p>
    </div>
  </div>
</template>