import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import {SET_USER_INFO} from './mutations-type.js'

Vue.use(Vuex);
let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
store.commit(SET_USER_INFO, userInfo);

export default store;
