<template>
<Box title="Recent Activity" >
  <img  v-if="loading" src="https://i.imgur.com/llF5iyg.gif" alt="loading" class="loader">
  <chart v-else :options="LineOptions" autoresize/>
</Box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
import * as timeago from 'timeago.js'
export default {
  components:{
    Box
  },
  data: () => ({
    vibrations: [],
  }),
  sockets: {
    update(data) {
      if ( this.vibrations.length >= 100 ) {
        this.vibrations.splice(0,1)
      }
      console.log(data.vibr)
      console.log(this.vibrations)
      this.vibrations.push(data.vibr) 
    }
  },
  computed: {
    loading(){
      return !(this.vibrations.length>1)
    },
    LineOptions(){
      return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.vibrations.map( el => timeago.format(el.date)),
            axisLabel:{
              textStyle:{
                color: "#c8c8c8"
              }
            }
        },
        yAxis: {
            type: 'value',
            // min:0,
            // max:1200,
            axisLabel:{
                color: "#c8c8c8"
            }
        },
        series: [{
            data: this.vibrations.map ( el => el.val) ,
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