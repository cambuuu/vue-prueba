<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" >Galeria Lanudo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class ="nav-link active" aria-current="page" to="/">Inicio</router-link>
            <router-link class ="nav-link" to="/galeria">Galeria</router-link>
            <!-- <a class="nav-link" href="#">Features</a> -->
            <router-link class="nav-link" to="/formulario">Formulario</router-link>
            <router-view/>
          </div>
        </div>
      </div>
  </nav>
    <div class="content">
    
    
  
  
  </div>
  
  
</template>

<script setup lang="ts">
//import Formulario from './components/Formulario.vue'
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
