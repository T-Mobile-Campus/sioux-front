<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="aside">
      <lum-display/>
      <vibr-list/>
      <Reset/>
      </div>
      <div class="main">
        <vibr-seconds/>
        <vibr-evolution/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LumDisplay from '@/components/LumDisplay.vue'
import VibrEvolution from '@/components/VibrEvolution.vue'
import VibrSeconds from '@/components/VibrSeconds.vue'
import Reset from '@/components/Reset.vue'
import VibrList from '@/components/VibrList.vue'
export default {
  name: 'App',
  components: {
    Header,
    LumDisplay,
    VibrSeconds,
    Reset,
    VibrEvolution,
    VibrList,
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
  color: rgb(200,200,200) !important;
  background-color: #292929;
  min-height: 100vh;
  padding: 0 10%;
}
.container{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
body{
  margin : 0;
}

.material-design-icon__svg{
  display:inline-block;
}

.toast{
  font-family:  Helvetica, Arial, sans-serif;
}

@media (max-width:900px){
  .container{
    flex-direction: column-reverse;
  }
  #app > div.container > div.main > div > div.echarts > div > canvas{
    width : 60%;
  }
}

@media (min-width:1000px){
    #app{
        padding: 0 30%;
    }
}
</style>
