<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="w-full bg-gray-800 text-white text-sm border-t border-neutral-900">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 justify-center pt-7">
        <div>
          <h5 class="text-base font-semibold mb-2">Confidentialité</h5>
          <ul class="pl-4">
            <li>Cookies</li>
            <li>Utilisation des données</li>
            <li>RGPD</li>
          </ul>
        </div>
        <div>
          <h5 class="text-base font-semibold mb-2">Réseaux Sociaux</h5>
          <ul class="pl-4">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Snapchat</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <h5 class="text-base font-semibold mb-2">CarMarket</h5>
          <ul class="pl-4">
            <li>Plan du site</li>
            <li>Déclaration d'indépendance</li>
          </ul>
        </div>
        <div class="col-span-3 grid grid-cols-subgrid my-5 ">
          <p>Mentions légales</p>
          <p>Condition d'utilisation</p>
          <p>Meltoz &copy; {{ year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>