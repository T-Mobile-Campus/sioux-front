<template>
  <box 
  :height="130" 
  :width="250"
  title="Reglage Alert">
  <Button
      color="#c8c8c8"
    text="Zim Zoom"
    size="medium"
    textColor="#262626"></Button>
  </box>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Box from '@/components/UI/Box.vue'
export default {
  components: { Box,
  Button },
  
}
</script>

<style scoped>

</style>