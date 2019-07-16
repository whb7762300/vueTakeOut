import {RECEIVE_ADDRESS, SET_USER_INFO, CLEAR_USER_INFO} from './mutations-type.js'

export default {
  [RECEIVE_ADDRESS](state) {

  },
  [SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  },
  [CLEAR_USER_INFO](state) {
    state.userInfo = {};
    localStorage.setItem('userInfo', '');
  }
}
