<template>
  <Box :width="250" :height="250" title="Light Intake" class="box">
    <chart :options="gaugeOpts" autoresize />
    <Button
    color="rgb(38, 37, 34)"
    text="Launch Routine"
    size="medium"
    textColor="#fffefc"
    @click="launch_routine"/>
  </Box>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
export default {
  components:{
    Button,
    Box
  },
  data: () => ({
    lum_data: 0,
    temp_data: 0
  }),
  sockets: {
  connect() {
    // upon socket connection
  },

  disconnect() {
    //upon socket disconnection
  },
  update(data) {
    this.lum_data = data.lum
    this.temp_data = data.temp
  }
},
methods:{
  launch_routine(){
    axios.get('http://localhost:5000/sioux/oui/01')
    .then(res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err)
    })
  }
},
computed:{
  gaugeOpts(){
    return   {
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              type: 'gauge',
              detail: {
                formatter: '{value}%',
                offsetCenter: [0, '70%'],
                fontSize:15
                },
              data: [{value: Math.round((this.lum_data -300) / (1020 - 300) * 100), name: ''}],
              axisLabel:{
                show: false
              },
              axisTick:{
                show: false
              },
          }
      ],
      radius: [10,20]
    }
  }
}
}
</script>

<style scoped>
  .echarts{
    width: auto !important;
    height: 80% !important;
    margin: -10px 0 -20px 0!important;
  }
  .box-subtitle{
    margin-bottom:-10px !important;
  }

</style>