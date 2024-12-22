<script setup lang="ts">
import {type ContactData, type ContactErrors, ContactSchema,} from "../../utils/validators/contact.validator";
import {z} from 'zod';

const initForm: ContactData = {
  email: '',
  subject: '',
  message: ''
};

const formData =ref<ContactData>({...initForm});
const formErrors = ref<ContactErrors>({});

const validateForm = (): boolean => {
  const result = ContactSchema.safeParse(formData);

  if(!result.success) {
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


const onSubmit = async () => {
  if(!validateForm()) return;

  console.log(formData);
}
</script>

<template>
  <form @submit="onSubmit">
    <fieldset>
      <label for="email">Email de contact : </label>
      <input type="email" id="email" v-model="formData.email" class="border" />
    </fieldset>
    <fieldset>
      <label for="subject">Email de contact : </label>
      <input type="text" id="subject" v-model="formData.subject"  class="border"/>
    </fieldset>
    <fieldset>
      <label for="message">Email de contact : </label>
      <textarea id="message" v-model="formData.message" class="border" />
    </fieldset>
  </form>
</template>