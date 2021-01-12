<template>
<div class="lumevolution">
  <h3 class="subtitle">Light intake evolution</h3>
  <chart :options="LineOptions" autoresize/>
</div>
</template>

<script>
export default {
  computed: {
    LineOptions(){
      return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            // areaStyle: {}
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>