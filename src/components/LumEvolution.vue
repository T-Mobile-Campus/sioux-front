<template>
<div class="lumevolution">
  <h3 class="subtitle">Light intake evolution</h3>
  <chart :options="LineOptions" autoresize/>
</div>
</template>

<script>
import axios from 'axios'
export default {
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