import Vue from 'vue'
import App from './App.vue'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import "@/plugins/charts";
import Toasted from 'vue-toasted';
 
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
  console.log(location.host)
} 

export const SocketInstance = socketio(wsHost );
//TODO PROXY CONFIG
console.log(SocketInstance)

Vue.use(new VueSocketIO({ connection: SocketInstance }))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
