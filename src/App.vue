<template>
  <div class="content">
    <router-link to="/">Home</router-link>
    <router-link to="/guide">Guide</router-link>
    <router-link to="/formulario">Formulario</router-link>
  
  <router-view/>
  </div>
</template>

<script setup lang="ts">
import Formulario from './components/Formulario.vue'
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
