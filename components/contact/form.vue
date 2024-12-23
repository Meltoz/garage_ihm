<script setup lang="ts">
import {type ContactData, type ContactErrors, ContactSchema,} from "../../utils/validators/contact.validator";

const emit = defineEmits<{
  contactData: ContactData
}>()

const initForm: ContactData = {
  email: '',
  subject: '',
  message: ''
};

const formData = reactive<ContactData>({...initForm});
const formErrors = ref<ContactErrors>({});

const validateForm = (): boolean => {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    formErrors.value = result.error.errors.reduce((acc: ContactErrors, error: any) => {
      const key = error.path[0] as keyof ContactData;
      acc[key] = error.message;
      return acc
    }, {} as ContactErrors)
    return false;
  }

  formErrors.value = {};
  return true;
}


const onSubmit = () => {
  if (!validateForm()) return;

  emit('contactData', formData);
}
</script>

<template>
  <div class="p-5 rounded space-y-5">
    <div class="bg-amber-50 space-y-5 p-2 rounded">
      <p>La méthode la plus simple pour nous contacter, c'est de nous contacter par ce formulaire. Nous vous
        répondrons le plus rapidement possible.</p>
      <p>A bientôt</p>
    </div>

    <form @submit.prevent="onSubmit" class="space-y-3 ">
      <fieldset class="flex flex-col">
        <label for="email">Votre Email : </label>
        <input type="email" id="email" v-model="formData.email" placeholder="xxx@xxx.com" class="border lg:w-1/2 w-full"/>
      </fieldset>
      <fieldset class="flex flex-col">
        <label for="subject">Sujet: </label>
        <input type="text" id="subject" v-model="formData.subject" class="border lg:w-1/2 w-full"/>
      </fieldset>
      <fieldset class="flex flex-col">
        <label for="message">Message : </label>
        <textarea id="message" v-model="formData.message" class="border lg:w-1/2 w-full" />
      </fieldset>
      <fieldset class="flex lg:justify-end w-full">
        <button type="submit"
                :disabled="!validateForm()"
                class="bg-blue-400 lg:w-fit w-full px-4 py-2 text-white font-semibold rounded hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-gray-400">
          Envoyer
        </button>
      </fieldset>
    </form>
  </div>

</template>