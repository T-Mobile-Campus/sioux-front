<template>
<Box title="Light intake evolution">
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
    lum_data: []
  }),
  mounted() {
     axios.get('http://localhost:5000/sioux/lum')
      .then( res => {
        this.lum_data = res.data
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
            data: this.lum_data.map( el => el.lum)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: this.lum_data.map( el => el.lum),
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