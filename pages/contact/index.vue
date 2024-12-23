<template>
  <h2 class="text-5xl mx-10 my-6">Nous contacter</h2>
  <div class="flex gap-10 flex-col lg:flex-row justify-between items-center mx-10 my-6">
    <div>
      <p>Pour toute information sur nos voitures d'occasion et services, contactez-nous directement par téléphone ou via
        notre formulaire en ligne. Notre équipe se tient à votre disposition pour vous conseiller et vous accompagner.
        </p>
      <p class="mt-6">Chez CarMarket, toute notre équipe est à votre service !</p>
    </div>
    <Parallax image="/imgs/garage.avif" class="h-[22rem] rounded"></Parallax>
  </div>
  <h4 class="text-4xl mx-10 my-6">Formulaire de contact</h4>
  <ContactForm @contactData="contactHandle" class="shadow sm:w-1/2 w-full mx-auto"/>
</template>

<script setup lang="ts">
import Parallax from "../../components/layout/parallax.vue";
import type {ContactData} from "../../utils/validators/contact.validator";

const contactHandle = (contactData: ContactData) => {
  console.log("contact Handle");
  console.log(contactData);
}
</script>