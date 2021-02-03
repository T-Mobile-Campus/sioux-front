<template>
  <div class="button" :style="`background-color:${color}; color:${textColor}`" :class="size" @click="onClick">
    <div class="buttonContent">
      <slot></slot>
      <span class="buttonText">
      {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    color: String,
    text: String,
    size: {
      type: String,
      default: 'medium',
      validator: value =>  ['big', 'medium', 'small'].includes(value) 
    },
    textColor: String,
  },
    methods: {
    onClick($event) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      this.$emit('click', $event)
    },
  },
}
</script>

<style scoped>
.big{
  min-width: 150px;
  font-size: 1.5em;
}
.medium{
  min-width: 100px;
  font-weight: bold;
}
.small{
  min-width: 50px;
  font-size: 0.8em;
  font-weight: bolder;
}
.button{
  display: inline-block;
  border-radius: 4px;
  border: none;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  box-shadow: 2px 2px 2px #282828;
  padding:7px 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.904) 0%, rgba(97, 93, 93, 0.521) 100%);
}
.button:hover{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(248, 247, 247, 0.514) 100%);
    cursor: pointer;
}
.buttonContent {
  display: flex ;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.buttonText{
  margin-left: 5px;
}

</style>