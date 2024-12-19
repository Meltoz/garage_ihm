<script setup lang="ts">
import {useAnnouncementById} from "../../composables/announcement.query";

const route = useRoute();
const id = route.params.id.toString();


const {data, isAnnouncementByIdLoading} = useAnnouncementById(Number.parseInt(id));
const announcement = computed(() => data.value);

</script>

<template>
  <div v-if="isAnnouncementByIdLoading">Chargement...</div>
  <div v-else>
    <h1 class="text-3xl">{{ announcement.title}}</h1>
    <pre>{{id}}</pre>
    <pre>{{announcement}}</pre>
  </div>
</template>

<style scoped>

</style>