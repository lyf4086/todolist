import Vue from 'vue'
import App from './App'
import './assets/index.css'
import store from './store'
import router from './router'

new Vue({
  el:"#app",
  store,
  router,
  components:{App},
  template:'<App />'
})
