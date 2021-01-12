import Vue from 'vue'
import App from './App.vue'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "@/plugins/charts";


Vue.use(Buefy)

export const SocketInstance = socketio('http://localhost:5000');
//TODO PROXY CONFIG
console.log(SocketInstance)

Vue.use(new VueSocketIO({ connection: SocketInstance }))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
