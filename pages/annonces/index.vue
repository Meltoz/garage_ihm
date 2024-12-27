<script setup lang="ts">
import {useAllAnnouncement} from "../../composables/announcement.query";
import {computed} from "vue";
useHead({
  title: 'Nos annonces',
  meta: [{
    name: 'description',
    content: 'Découvrez nos annonces exclusives pour la vente de voitures et trouvez la voiture de vos rêves dès maintenant !'
  }]
});

const router = useRouter();

const pageSize = 10;
const page = 1;

const {data, isAllAnnouncementLoading, isAllAnnouncementError} = useAllAnnouncement(page, pageSize);
const announcements = computed(() => data.value?.data);


</script>
<template>
  <div v-if="isAllAnnouncementLoading">
    <div class="flex justify-center items-center h-[90vh] flex-col gap-10">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <p>Chargement en cours ....</p>
    </div>
  </div>

  <div v-else-if="isAllAnnouncementError">
    <div class="flex justify-center items-center h-screen">
      <p>Une erreur est survenue</p>
    </div>
  </div>

  <div v-else class="flex flex-col sm:flex-row justify-between content-center items-center mx-5 mb-5">
    <div>
      <h1 class="text-4xl md:text-5xl py-10">Listes des annonces</h1>
      <p class="py-3">Découvrez nos annonces exclusives pour la vente de voitures et trouvez la voiture de vos rêves dès
        maintenant !</p>
    </div>
    <NuxtLink to="/annonces/edit" class="border font-bold text-white bg-gray-800 hover:bg-gray-600 transition-all duration-200 h-fit rounded px-8 py-4">Créer</NuxtLink>
  </div>

  <div class="md:px-10 mx-1 mb-10">
    <div class="grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-5 grid-cols-1">
      <div v-for="annonce in announcements" :key="annonce.id" @click="router.push(`/annonces/${annonce.id}`)">
        <announcement-card :announcement="annonce" />
      </div>
    </div>
  </div>
</template>