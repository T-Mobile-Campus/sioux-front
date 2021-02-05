<template>
  <box 
  :height="385" 
  :width="250"
  title="Highest Recent Vibrations">
    <div class="items">
      <list-item v-for="vibr in latest_vibr" :key="vibr._id" :date="vibr.doc.date" :value="vibr.doc.vibr"/>
    </div>
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
  sockets: {
    update() {
      this.getVibrz()
    }
  },
  methods:{
    getVibrz(){
      axios.get('/server/sioux/High_values')
      .then( res => {
        this.latest_vibr = res.data.sort((a,b) => {return  (new Date(b.doc.date) - new Date(a.doc.date)) })
      })
      .catch (err => {
        console.log(err)
      })
    }
  },
  
}
</script>

<style scoped>
.items{
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-top: 20px;;
}
</style>