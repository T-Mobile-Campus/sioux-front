<template>
  <box 
  :height="430" 
  :width="250"
  title="Latest Vibrations">
  <list-item v-for="vibr in latest_vibr" :key="vibr._id" :date="vibr.doc.date" :value="vibr.doc.vibr"/>
  </box>
</template>

<script>
import Box from '@/components/UI/Box.vue'
import axios from 'axios'
import ListItem from './UI/ListItem.vue'
export default {
  components: { 
    Box,
    ListItem
   },
   data: () => ({
     latest_vibr : []
   }),
  created() {
    this.getVibrz()
  },
  methods:{
    getVibrz(){
      axios.get('/server/sioux/High_values')
      .then( res => {
        this.latest_vibr = res.data
        console.log(res.data)
      })
      .catch (err => {
        console.log(err)
      })
    }
  },
  
}
</script>

<style scoped>

</style>