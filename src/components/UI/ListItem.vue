<template>
    <div class="listItem">
        <AlertIcon/>
        <div class="listItem__content">
            <span class="listItem__content__value">{{ value }} </span> <span class="listItem__content__date">  {{ date_formated }} </span>
        </div>
    </div>
</template>

<script>
import AlertIcon from 'vue-material-design-icons/AlertOctagram.vue';
import * as timeago from 'timeago.js'
export default {
    components: {
        AlertIcon
    },
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
    .listItem__content{
        text-align: left;
        display:inline-block;
        margin: auto auto auto 10px;
    }
    .listItem {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        margin: 10px 0;
    }
    .material-design-icon__svg{
        color:#db483b;
    }
    .listItem__content__value{
        font-weight: bold;
    }

    .listItem__content__date{
        margin-left: 12px;
        font-size: 0.85rem;
    }
</style>