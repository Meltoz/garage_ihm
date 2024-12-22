<script setup lang="ts">
import {z} from "zod";
import {useAddAnnouncement} from "../../composables/announcement.query";
import {addAnnouncement} from "../../services/announcement.service";
import {useRouter} from "nuxt/app";
useHead({
  title: 'Création d\'une annonce',
  meta: [{
    name: 'description',
    content: 'Créez une annonce pour vendre votre voiture'
  }]
});
const formSchema = z.object({
  title: z.string().min(5, 'Le titre doit faire plus de 5 caractères').max(50, 'Le titre doit faire moins de 50 caractères'),
  content: z.string().min(10, 'La description doit faire plus de 10 caractères').max(500, 'La description doit faire moins de 500 caractères'),
  car: z.object({
    brand: z.string().min(2, 'La marque doit faire plus de 2 caractères').max(50, 'La marque doit faire moins de 50 caractères'),
    model: z.string(),
    door: z.number().min(0).max(7, 'Le nombre de portes doit être inférieur à 5'),
    kilometers: z.number().min(0, 'Le nombre de kilomètres doit être positif'),
    price: z.number().min(0, 'Le prix doit être positif'),
    year: z.number().min(1900, 'L\'année doit être supérieure à 1900').max(new Date().getFullYear(), 'L\'année doit être inférieure à l\'année actuelle')
  })
});

const router = useRouter();
const {AddAnnouncement} = useAddAnnouncement();

const form = reactive({
  title: '',
  content: '',
  car: {
    brand: '',
    model: '',
    door: 3,
    kilometers: 0,
    price: 0,
    year: new Date().getFullYear()
  }
});

// Ajouter un état réactif pour les erreurs
const errors = reactive({
  title: null,
  content: null,
  car: {
    brand: null,
    model: null,
    door:null,
    kilometers: null,
    price: null,
    year: null,
  },
});


const handleSubmit = () => {
  errors.car = {
    brand: null,
    model: null,
    kilometers: null,
    price: null,
    year: null,
  };
  errors.title = null;
  errors.content = null;

  // Valider le formulaire
  const valid = formSchema.safeParse(form);

  if (!valid.success) {
    // En cas d'erreur, associer les messages d'erreur aux champs correspondants
    valid.error.errors.forEach((error) => {
      setNestedError(error.path, error.message);
    });
    return;
  }
  addAnnouncement(form);
  router.push('/annonces');
}

const setNestedError = (path: (string | number)[], message: string) => {
  let current = errors;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]];
  }
  current[path[path.length - 1]] = message;
};
</script>

<template>
  <h3 class="text-3xl m-5">Création d'une annonce</h3>
  <form @submit.prevent="handleSubmit" class="w-full max-w-xl mx-auto space-y-5 px-2 sm:px-0">
    <fieldset class="space-y-3">
      <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
      <input v-model="form.title" type="text" class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
      <p v-if="errors.title" class="rounded bg-red-300 text-white px-5 py-1">{{ errors.title }}</p>
    </fieldset>

    <fieldset class="space-y-3">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea v-model="form.content" class="border border-neutral-500 rounded w-full px-1 "/>
      <p v-if="errors.content" class="rounded bg-red-300 text-white px-5 py-1">{{ errors.content }}</p>
    </fieldset>

    <fieldset>
      <legend class="text-lg py-5 pl-2">Informations sur la voiture</legend>
      <fieldset class="my-4">
        <label for="brand" class="block text-sm font-medium text-gray-700">Marque</label>
        <input v-model="form.car.brand" type="text" class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
        <p v-if="errors.car.brand">{{ errors.car.brand }}</p>
      </fieldset>

      <fieldset class="my-4">
        <label for="model" class="block text-sm font-medium text-gray-700">Modèle</label>
        <input v-model="form.car.model" type="text" class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
        <p v-if="errors.car.model">{{ errors.car.model }}</p>
      </fieldset>

      <fieldset class="my-4 flex items-center justify-between gap-5">
        <label for="fuelType" class="block text-sm font-medium text-gray-700 shrink-0">Type de carburant</label>
        <select v-model="form.car.fuelType" class="border border-neutral-500 rounded px-1 py-0.5 basis-full">
          <option value="" disabled selected>Selectionner un type</option>
          <option value="Petrol">Essence</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Hybride</option>
        </select>
      </fieldset>

      <fieldset class="my-4 flex items-center justify-between gap-5">
        <label for="gearbox" class="block text-sm font-medium text-gray-700 shrink-0">Type de boite</label>
        <select v-model="form.car.gearbox" class="border border-neutral-500 rounded px-1 py-0.5 basis-full">
          <option value="" disabled selected>Sélectionner un type</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manuel</option>
        </select>
      </fieldset>

      <fieldset class="my-4">
        <label for="kilometers" class="block text-sm font-medium text-gray-700">Kilomètres</label>
        <input v-model="form.car.kilometers" type="number"
               class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
      </fieldset>

      <fieldset class="my-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Prix</label>
        <input v-model="form.car.price" type="number" class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
      </fieldset>

      <fieldset class="my-4">
        <label for="year" class="block text-sm font-medium text-gray-700">Année</label>
        <input id="year" v-model="form.car.year" type="number"
               class="border border-neutral-500 rounded w-full px-1 py-0.5"/>
      </fieldset>
    </fieldset>

    <div class="flex justify-end mt-5">
      <button type="submit" class="bg-blue-400 rounded px-4 py-2 w-full md:w-fit">Publier</button>
    </div>
  </form>

</template>

<style scoped>

</style>