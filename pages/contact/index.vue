<template>
  <h2 class="text-5xl mx-10 my-6">Nous contacter</h2>
  <div class="flex gap-10 flex-col lg:flex-row justify-between items-center mx-10 my-6">
    <div>
      <p>Pour toute information sur nos voitures d'occasion et services, contactez-nous directement par téléphone ou via
        notre formulaire en ligne. Notre équipe se tient à votre disposition pour vous conseiller et vous accompagner.
        </p>
      <p class="mt-6">Chez CarMarket, toute notre équipe est à votre service !</p>
    </div>
    <Parallax image="/imgs/garage.avif" class="h-96 rounded"></Parallax>
  </div>
  <h4 class="text-2xl">Formulaire de contact</h4>
  <ContactForm />
</template>
<script setup lang="ts">
import Parallax from "../../components/layout/parallax.vue";


function save(){

}

</script>