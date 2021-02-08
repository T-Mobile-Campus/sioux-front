<template>
  <div class="alert" v-if="routine !=-1" v-on-clickaway="away">
    <input type="number"  id="routine_input" v-model="routine" oninput="this.value = 
 !!this.value && Math.abs(this.value)!= 0 && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" :disabled="isDisabled" ref="routine_input" tabindex="-1"> min      
    <edit-icon @click="edit" v-if="isDisabled"></edit-icon>
    <check-icon v-else @click="submitRoutine" class="checkIcon"></check-icon>
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
    routine: -1,
    isDisabled: true,
  }),
  mounted() {
    this.getRoutine()
  },
  created(){
  },
  methods:{
    getRoutine() {
      axios.get('/server/sioux/auto_mode')
      .then( res => {
        this.routine = res.data.doc
        console.log(res.data)
      })
      .catch (err => {
        console.log(err)
      })
    },
    edit() {
      this.isDisabled = false
      this.$nextTick(() => {
        document.querySelector('#routine_input').focus()
      })
    },
    submitRoutine(){
      if (this.routine > 0) {
        this.isDisabled = true;
        axios.get(`/server/sioux/routine/${this.routine}`)
        .then(res => {
          if (res.data) {
            this.$toasted.show('Routine Updated !')
            this.routine = res.data
          }
        })
        .catch( err => {
          console.log(err)
        })
      }
      else { 
        this.$toasted.show("Heeeeyyyyyyy CA VA PAS NON")
        this.routine = 60
      }
    },
    away(){
      this.isDisabled = true
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
}
.alert {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.material-design-icon{
  margin-left: 15px !important;
}
</style>