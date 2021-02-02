<template>
<Box title="Recent Activity" >
  <chart :options="LineOptions" autoresize/>
</Box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
export default {
  components:{
    Box
  },
  data: () => ({
    vibrations: []
  }),
  sockets: {
    update(data) {
      console.log(data)
      if ( this.vibrations.length >= 100) {
        this.vibrations.splice(0,6)
      }
      this.vibrations = this.vibrations.concat(data.vibr) // set a limit
    }
  },
  computed: {
    LineOptions(){
      return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.vibrations,
            axisLabel:{
              textStyle:{
                color: "#c8c8c8"
              }
            }
        },
        yAxis: {
            type: 'value',
            min:0,
            max:500,
            axisLabel:{
                color: "#c8c8c8"
            }
        },
        series: [{
            data: this.vibrations,
            type: 'line',
            areaStyle: {}
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>