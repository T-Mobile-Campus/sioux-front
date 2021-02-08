<template>
  <div class="alert" v-if="threshold !=-1" v-on-clickaway="away">
    <input type="number" id="abdel" oninput="this.value = 
 !!this.value && Math.abs(this.value)!= 0 && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"  v-model="threshold" :disabled="isDisabled" ref="threshold_input" tabindex="-1"> Hz
      <edit-icon @click="edit" v-if="isDisabled"></edit-icon>
      <check-icon v-else @click="submitThreshold" class="checkIcon"></check-icon>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import axios from 'axios'
import EditIcon from 'vue-material-design-icons/SquareEditOutline.vue';
import CheckIcon from 'vue-material-design-icons/CheckboxMarked.vue'
export default {
  components: {
    EditIcon,
    CheckIcon
  },
  directives: {
    onClickaway: onClickaway,
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
      if ( this.threshold > 0) {
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
      else {
        this.threshold = 1000
        this.$toasted.show("Eh oh là ! ")
      }
    },
    away(){
      this.isDisabled = true
    },
  }
}
</script>

<style scoped>
  input{
    width : 30%;
    text-align: center;
    background: transparent;
    border: none;
    font-family:inherit;
    font-size: 1.77rem;
    color: inherit;
    opacity: 0.7;
  }

  input:focus{
    outline: none ;
    border-radius: 4px;
    border: 2px solid rgb(200,200,200,0.4) ;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.material-design-icon{
  margin-left: 15px !important;
};
</style>