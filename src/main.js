// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
//vant组件
import {Rate, Button, Switch, Toast, ImagePreview, Search} from 'vant';

Vue.use(Search);
Vue.use(ImagePreview);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Rate);
Vue.use(Toast);


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
});
