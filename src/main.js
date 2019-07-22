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

//定义时间转换过滤器
Vue.filter('dateFormat', function (data, pattern = '') {
  let date = new Date(data);
  let year = date.getFullYear();
  //两位不足则补0
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  if (pattern == 'yyyy-mm-dd') {
    return `${year}-${month}-${day}`;
  } else {
    var hh = date.getHours().toString().padStart(2, '0')
    var mm = date.getMinutes().toString().padStart(2, '0')
    var ss = date.getSeconds().toString().padStart(2, '0')
    return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
  }
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
});
