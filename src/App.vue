<template>
  <div id="app">
    <Header/>
    <div class="container">
      <lum-display/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LumDisplay from '@/components/LumDisplay.vue'
export default {
  name: 'App',
  components: {
    Header,
    LumDisplay
  },
  data() {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },

  sockets: {
    connect() {
      this.isConnected = true;
      console.log('coooo')
    },

    disconnect() {
      this.isConnected = false;
    },

    lum(data) {
      this.socketMessage = data
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
