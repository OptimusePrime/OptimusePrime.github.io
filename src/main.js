import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons, IconsPlugin} from "bootstrap-vue";
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-vue/dist/bootstrap-vue.css";
import "masonry-layout/dist/masonry.pkgd"

//Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
