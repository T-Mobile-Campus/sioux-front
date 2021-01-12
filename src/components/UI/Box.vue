<template>
  <div class="box" :style="`width:${width}px; height:${height}px;`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    width: Number,
    height: Number 
  }
}
</script>
<style scoped>
  .box{
    box-shadow: 5px 5px lightslategrey;
    border-radius: 5px;
    background-color: rgba(214, 107, 6, 0.705);
  }
</style>