// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
var VuePaginate = require('vue-paginate')
import App from './App'

Vue.use(VueResource);
Vue.use(VuePaginate);

Vue.config.productionTip = false

Vue.component('button-edit',{
  template: "<button>hello world</button>"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App></App>'
})
