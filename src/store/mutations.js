import {
  RECEIVE_ADDRESS,
  SET_USER_INFO,
  CLEAR_USER_INFO,
  CART_FOOD_ADD,
  CART_FOOD_DEL,
  CART_FOOD_CLEAR
} from './mutations-type.js'
import Vue from 'vue';

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
  },
  [CART_FOOD_ADD](state, food) {
    if (!food.count) {
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      state.cartFoods.push(food);
    } else {
      food.count++
    }

  },
  [CART_FOOD_DEL](state, food) {
    if (food.count) {
      if (food.count > 0) {
        food.count--
      }
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  [CART_FOOD_CLEAR](state) {
    for (let i = 0; i < state.cartFoods.length; i++) {
      state.cartFoods[i].count = 0;
    }
    state.cartFoods = [];
  }
}
