<template>
  <body>
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" >Galeria Lanudo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class ="nav-link active" aria-current="page" to="/">Inicio</router-link>
            <router-link class ="nav-link active" to="/galeria">Galeria</router-link>
            <!-- <a class="nav-link" href="#">Features</a> -->
            <router-link class="nav-link active" to="/formulario">Sobre mi</router-link>
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <Component :is="Component"/>
              </transition>
            </router-view>
          </div>
        </div>
      </div>
  </nav>
    
  </body>
    
    
  
  
</template>

<script setup lang="ts">
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
body {
  background: #283c86;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* Color of the links BEFORE scroll */
.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon {
  color: #fff;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler-icon {
  color: #4f4f4f;
}

/* Color of the navbar AFTER scroll */
.navbar-scrolled {
  background-color: #fff;
}

/* An optional height of the navbar AFTER scroll */
.navbar.navbar-scroll.navbar-scrolled {
  padding-top: 5px;
  padding-bottom: 5px;
}

.content{
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}
a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}
a:hover,
a.router-link-active{
  border-bottom: 2px solid #3498db;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
</style>
