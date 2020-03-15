import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // data: {
  //   msg: 'Welcom',
  //   name: '土豆丝',
  //   pic: './assets/cmb.png',
  //   complex: 5,
  // },
  render: h => h(App),
}).$mount('#app')
