<template>
  <div id="app">
    <!-- <Header/> -->
    <div class="container">
      <div class="aside">
      <lum-display/>
      <vibr-list/>
      <reglage-alert/>
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
// import Header from '@/components/Header.vue'
import LumDisplay from '@/components/LumDisplay.vue'
import VibrEvolution from '@/components/VibrEvolution.vue'
import VibrSeconds from '@/components/VibrSeconds.vue'
import Reset from '@/components/Reset.vue'
import VibrList from '@/components/VibrList.vue'
import ReglageAlert from '@/components/ReglageAlert.vue'
export default {
  name: 'App',
  components: {
    // Header,
    LumDisplay,
    VibrSeconds,
    Reset,
    VibrEvolution,
    VibrList,
    ReglageAlert,
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

.material-design-icon {
  margin:0 !important;
  padding: 0 !important;
  height: 24px !important;
  width: 24px;
}

@media (max-width:900px){
  .container{
    flex-direction: column-reverse;
  }
  #app > div.container > div.main > div > div.echarts > div > canvas{
    width : 60%;
  }
    #app{
        padding: 0;
    }
    .box{
      width : auto !important;
    }
}

@media (min-width:1000px){
    #app{
        padding: 0 30%;
    }
}
</style>
