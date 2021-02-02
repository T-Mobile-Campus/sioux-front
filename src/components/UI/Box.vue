<template>
  <div class="box" :style="`width:${width}px; height:${height}px;`">
    <div v-if="title" class="box-title">
      <h4>{{ title }}</h4>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    width: Number,
    height: Number,
    title: String
  }
}
</script>
<style scoped>
  .box{
    box-shadow: 4px 4px 4px 4px #262626;
    border-radius: 4px;
    background-color: #626262;
    margin: 15px;
  }
  .box-title{
    height:10%;
    border-radius: 4px 4px 0 0;
    padding-top: 10px;
    background: linear-gradient(180deg, rgba(194,190,190,0.2497373949579832) 0%, rgba(255,255,255,0) 100%);
  }
  .box-title h4{
    margin-inline-end: 15px;
    display: block;
    margin : 0;
  }
</style>