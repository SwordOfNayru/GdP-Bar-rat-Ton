<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">

  <i class="fas fa-search"></i>

  <barre-recherche />
</div>

</template>

<script>
import BarreRecherche from './components/BarreRecherche.vue'
require("@fortawesome/fontawesome-free");
export default {
  name: 'App',
  components: {
    BarreRecherche,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
