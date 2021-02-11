import Vue from 'vue'
import App from './App.vue'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import "@/plugins/charts";
import { fr } from "@/plugins/timeago_fr.js";
import Toasted from 'vue-toasted';
import { register } from 'timeago.js';

register('fr_FR', fr)

Vue.use(Toasted, {
  duration: 3500,
  position: 'top-right',
  containerClass: "toast",
  action : {
    text : 'Okay',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
})
let wsHost = "https://sioux.herokuapp.com"
if (location.host.split(":")[0] == "localhost") {
  wsHost = 'http://localhost:5000'
} 

Vue.directive('click-outside', {
  bind () {
      this.event = event => this.vm.$emit(this.expression, event)
      this.el.addEventListener('click', this.stopProp)
      document.body.addEventListener('click', this.event)
  },   
  unbind() {
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) { event.stopPropagation() }
})

export const SocketInstance = socketio(wsHost );
//TODO PROXY CONFIG

Vue.use(new VueSocketIO({ connection: SocketInstance }))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
