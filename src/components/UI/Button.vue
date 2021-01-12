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
      validator: value => { ['big', 'medium', 'small'].includes(value) }
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
}
.small{
  width: 50px;
  font-size: 0.8em;
}
button{
  border-radius: 5px;
  border: none;
}
</style>