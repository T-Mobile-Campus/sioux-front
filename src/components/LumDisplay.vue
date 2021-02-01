<template>
  <Box :width="250" :height="250" title="Light Intake" class="box">
    <chart :options="gaugeOpts" autoresize />
    <Button
    color="#c8c8c8"
    text="Launch Routine"
    size="medium"
    textColor="#262626"
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
    lum_data: 1000,
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
              itemStyle:{
                color: "#c8c8c8"
              },
              detail: {
                formatter: '{value}%',
                offsetCenter: [0, '70%'],
                fontSize:15,
                color: "#c8c8c8"
                },
              data: [{value: Math.round((this.lum_data -300) / (1020 - 300) * 100), name: ''}],
              axisLabel:{
                show: false,
              },
              axisTick:{
                show: false,
              },
              splitLine: {
                length: 15,
                lineStyle: {
                width: 2,
                color: '#FF990E'
              },
              axisLine: {
                show: false,
                lineStyle: {
                  width: 0,
               }
              },
              progress:{
                show:true
              }
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