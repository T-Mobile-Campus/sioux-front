<template>
  <Box :width="250" :height="40" class="box">
    <Button
    color="#c8c8c8"
    text="Remise à zéro"
    size="medium"
    textColor="#262626"
    @click="launch_reset">
    <RestartIcon/>
    </Button>
  </Box>
</template>
<script>
import Button from '@/components/UI/Button.vue'
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
import RestartIcon from 'vue-material-design-icons/Restart.vue';
export default {
  components:{
    Button,
    Box,
    RestartIcon
  },
  methods:{
    launch_reset(){
      axios.get('/server/signal/oui/02')
      .then(res => {
        if (res.data.smoke_signal) this.$toasted.show('Signal envoyé !')
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>
.box {
  padding: 10px 0;
}
</style>