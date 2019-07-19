import {SET_USER_INFO} from './mutations-type.js'

export default {
  getCartCount(state) {
    let num = 0;
    state.cartFoods.forEach(food => {
      num = num + food.count;
    })
    return num;
  },
  getCartPrice(state) {
    let price = 0;
    state.cartFoods.forEach(food => {
      price = price + food.count * food.price;
    })
    return price;
  }
}
