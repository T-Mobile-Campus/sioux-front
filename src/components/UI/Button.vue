<template>
  <button :style="`background-color:${color}; color:${textColor}`" :class="size" @click="onClick">
    {{ text }}
  </button>
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
    textColor: String
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
  width: 100px;
  font-size: 1.5em;
}
.medium{
  width: 70px;
  font-weight: bold;
}
.small{
  width: 50px;
  font-size: 0.8em;
  font-weight: bolder;
}
button{
  border-radius: 2px;
  border: none;
  box-shadow: 2px 2px 2px #282828;
}
</style>