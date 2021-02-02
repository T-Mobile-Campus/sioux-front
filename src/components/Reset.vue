<template>
  <Box :width="250" :height="40" class="box">
    <Button
    color="#c8c8c8"
    text="Remise à zéro"
    size="medium"
    textColor="#262626"
    @click="launch_reset"/>
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
  methods:{
    launch_reset(){
      axios.get('/server/sioux/oui/02')
      .then(res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>
</style>