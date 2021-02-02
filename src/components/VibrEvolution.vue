<template>
<Box title="Vibrations evolution" >
  <chart :options="LineOptions" autoresize/>
</Box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
export default {
  components:{
    Box
  },
  data: () => ({
    vibr_data: []
  }),
  mounted() {
     axios.get('http://localhost:5000/sioux/vibr')
      .then( res => {
        this.vibr_data = res.data.map( el => el.doc)
      })
      .catch (err => {
        console.log(err)
      })
  },
  computed: {
    LineOptions(){
      return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.vibr_data.map( el => el.date),
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

</style>