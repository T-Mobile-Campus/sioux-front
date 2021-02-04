<template>
  <Box :height="130" :width="250" title="Reglage Alert" class="box">
    <input type="number">
     <Button
    color="#c8c8c8"
    text="Valider"
    size="medium"
    textColor="#262626"
    @click="valider_seuil">
    </Button>    
  </Box>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
export default {
  components: { 
    Button,
    Box 
  },
methods:{
    valider_seuil(){
      axios.get('/server/sioux/oui/01')
      .then(res => {
        console.log(res)
        if (res.data.smoke_signal) this.$toasted.show('Signal sent !')
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