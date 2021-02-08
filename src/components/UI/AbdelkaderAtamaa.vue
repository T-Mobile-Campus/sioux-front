<template>
  <div class="alert" v-if="threshold !=-1">
    <input type="number" id="abdel" v-model="threshold" :disabled="isDisabled" ref="threshold_input" tabindex="-1">/Hz
    <edit-icon @click="edit" v-if="isDisabled"></edit-icon>
    <check-icon v-else @click="submitThreshold" class="checkIcon"></check-icon>
  </div>
</template>

<script>
import axios from 'axios'
import EditIcon from 'vue-material-design-icons/SquareEditOutline.vue';
import CheckIcon from 'vue-material-design-icons/CheckboxMarked.vue'
export default {
  components: {
    EditIcon,
    CheckIcon
  },
  data: () => ({
    threshold: -1,
    isDisabled: true,
  }),
  mounted() {
    this.getThreshold()
  },
  created(){
  },
  methods:{
    getThreshold() {
      axios.get('/server/sioux/threshold')
      .then( res => {
        this.threshold = res.data.doc
        console.log(res.data)
      })
      .catch (err => {
        console.log(err)
      })
    },
    edit() {
      this.isDisabled = false
      this.$nextTick(() => {
        document.querySelector('#abdel').focus()
      })
    },
    submitThreshold(){
      this.isDisabled = true;
      axios.get(`/server/sioux/threshold/${this.threshold}`)
      .then(res => {
        console.log(res.data)
        if (res.data) {
          this.$toasted.show('Threshold Updated !')
          this.threshold = res.data
        }
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>
  input{
    width : 30%;
    text-align: center;
    background: transparent;
    border: none;
    font-family:inherit;
    font-size: 2rem;
    color: inherit;
    opacity: 0.7;
  }

  input:focus{
    outline: none ;
    border-bottom: 1px solid rgb(200,200,200,0.4) ;
    opacity: 1;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.checkIcon{
  color: #3deb34;
}
.alert {
  height: auto;
}
</style>