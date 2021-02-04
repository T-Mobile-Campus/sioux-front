<template>
    <p>
        {{ value }} : {{ date_formated }}
    </p>
</template>

<script>
import * as timeago from 'timeago.js'
export default {
    props:{
        value: Number,
        date: String
    },
    computed: {
        date_formated(){
            return timeago.format(this.date)
        }
    }
}
</script>

<style scoped>

</style>