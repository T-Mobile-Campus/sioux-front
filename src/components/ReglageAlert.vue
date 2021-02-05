<template>
  <Box :height="130" :width="250" title="Reglage Alert" class="box">
    <abdelkader-atamaa/>
    <routine-controller/>
  </Box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
import AbdelkaderAtamaa from '@/components/UI/AbdelkaderAtamaa.vue'
import RoutineController from '@/components/UI/RoutineController.vue'
export default {
  components: { 
    Box,
    AbdelkaderAtamaa,
    RoutineController
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
    },
  },
  }
</script>

<style scoped>

</style>