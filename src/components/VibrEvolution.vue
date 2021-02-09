<template>
<Box title="Évolution des vibrations" >
  <img  v-if="loading" src="https://i.imgur.com/llF5iyg.gif" alt="loading" class="loader">
  <chart v-else :options="LineOptions" autoresize/>
</Box>
</template>

<script>
import * as timeago from 'timeago.js'
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
export default {
  components:{
    Box
  },
  data: () => ({
    vibr_data: []
  }),
  sockets: {
    update() {
      this.getVibrz()
    }
  },
  mounted() {
    this.getVibrz()
  },
  methods:{
    getVibrz(){
      axios.get('/server/sioux/last_12_hours')
      .then( res => {
        this.vibr_data = res.data.map( el => el.doc)
      })
      .catch (err => {
        console.log(err)
      })
    }
  },
  computed: {
    loading(){
      return !(this.vibr_data.length>1)
    },
    LineOptions(){
      return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.vibr_data.map( el => timeago.format(el.date, 'fr_FR')),
            axisLabel:{
              textStyle:{
                color: "#c8c8c8"
              }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel:{
              textStyle:{
                color: "#c8c8c8"
              }
            }
        },
        series: [{
            data: this.vibr_data.map( el => el.vibr),
            type: 'line',
            areaStyle: {}
        }]
      }
    }
  }
}
</script>

<style scoped>
.loader{
  max-height: 7em;
  margin: 25%;
}
@media (max-width:900px){

  .echarts{
    width: auto !important;
  }
}
</style>