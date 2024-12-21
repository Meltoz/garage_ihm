<script setup lang="ts">
import {useAnnouncementById} from "../../composables/announcement.query";
import {formatDate} from "../../utils/date-formater";

const route = useRoute();
const id = route.params.id.toString();


const {data, isAnnouncementByIdLoading} = useAnnouncementById(Number.parseInt(id));
const announcement = computed(() => data.value);

</script>

<template>
  <div v-if="isAnnouncementByIdLoading">Chargement...</div>
  <div v-else class="mx-5">
    <h1 class="text-3xl my-4">{{ announcement.title}}</h1>
    <img src="/imgs/voiture.jpg" alt="car"  class="rounded-xl h-[400px]"/>
    <div class="my-4">
      <p class="font-semibold">Description de l'annonce</p>
      <p class="mx-2">{{ announcement.content}}</p>
    </div>

    <div class="border rounded relative">
      <h3 class="absolute mx-3 px-2 -top-4 bg-white font-semibold text-xl">Voiture</h3>
      <div class="container grid grid-cols-2 mt-5">
        <div>
          <p><span class="font-semibold">Marque : </span> {{announcement.car.brand}}</p>
        </div>
        <div>
          <p><span class="font-semibold">Modèle : </span> {{announcement.car.model}}</p>
        </div>
      </div>
    </div>

    <p>Annonce mise en ligne le : {{formatDate(announcement.createdAt)}}</p>
  </div>
</template>