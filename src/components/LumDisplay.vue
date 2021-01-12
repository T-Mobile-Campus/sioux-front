<template>
  <section class="box">
    <h3 class="subtitle box-subtitle">Light intake</h3>
    <chart :options="gaugeOpts" autoresize />
    <Button
    color="rgb(38, 37, 34)"
    text="Launch Routine"
    size="medium"
    textColor="#fffefc"
    @click="launch_routine"/>
  </section>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import axios from 'axios'
export default {
  components:{
    Button
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
  .box{
    box-shadow: 5px 5px lightslategrey;
    border-radius: 5px;
    background-color: rgba(214, 107, 6, 0.705);
    width: 200px;
    height: 200px;
  }
  .echarts{
    width: auto !important;
    height: 80% !important;
    margin-bottom: -10px !important;
  }
  .box-subtitle{
    margin-bottom:-10px !important;
  }

</style>