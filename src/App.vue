<template>
  <div id="app">
    <Header/>
    <div class="container">
      <lum-display/>
      <lum-evolution/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LumDisplay from '@/components/LumDisplay.vue'
import LumEvolution from './components/LumEvolution.vue'
export default {
  name: 'App',
  components: {
    Header,
    LumDisplay,
    LumEvolution
  },
  data() {
    return {

    }
  },
}
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(68,68,68);
  margin-top: 60px;
}

</style>
