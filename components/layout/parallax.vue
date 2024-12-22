<template>
  <div
      class="parallax-container relative overflow-hidden w-full h-screen"
      :style="{ backgroundImage: 'url(' + props.image + ')' }"
  >
      <slot></slot>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const props = defineProps({
  image: {type: String, required: true}
})

function mounted() {
  // Écouter l'événement de scroll
  window.addEventListener('scroll', this.handleScroll);

  // Initialiser la position de la fenêtre avec GSAP
  gsap.set(this.$refs.frame, { y: 0 });
}

function handleScroll() {
  const scrollY = window.scrollY;

  // Animer le cadre avec GSAP
  gsap.to(this.$refs.frame, {
    y: scrollY, // Contrôle de la vitesse de mouvement du cadre
  });
}

function destroyed() {
  window.removeEventListener('scroll', this.handleScroll);
}
</script>

<style scoped>
.parallax-container {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.parallax-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
</style>
