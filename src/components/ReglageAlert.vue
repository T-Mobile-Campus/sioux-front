<template>
  <Box :height="130" :width="250" class="box">
    <div class="subtitle">Seuil d'alerte</div>
    <abdelkader-atamaa/>
    <div class="subtitle">Fréquence de routine</div>
    <routine-controller/>
  </Box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
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
      this.$toasted.show('Signal envoyé !')
    },
  },
  }
</script>

<style scoped>
.subtitle{
  /* font-size: 1.4rem; */
  font-weight: bold;
  /* color: #000000; */
  /* text-decoration: underline; */
  text-align: center;
  margin-top: 5px ;
}
.box{
  padding: 10px 0;
}
</style>