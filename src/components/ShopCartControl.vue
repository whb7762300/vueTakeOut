<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline cart-jian" v-show="food.count"
           @click="del"></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle cart-add" @click="add"></div>
  </div>
</template>

<script>
  import {CART_FOOD_ADD, CART_FOOD_DEL} from '../store/mutations-type.js'

  export default {
    name: "ShopCartControl",

    data() {
      return {}
    },
    methods: {
      del() {
        this.$store.commit(CART_FOOD_DEL, this.food);
      },
      add() {
        this.$store.commit(CART_FOOD_ADD, this.food);
      }
    },
    created() {
    },
    props: ['food']
  }
</script>

<style scoped lang="scss">
  .cartcontrol {
    display: flex;

    .cart-jian {
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: #02a774;
    }

    .cart-count {
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: #93999f;
    }

    .cart-add {
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: #02a774;
    }
  }

  .move-enter, .move-leave-to {
    transform: translateX(20px) rotate(90deg);
  }

  .move-enter-active, .move-leave-active {
    transition: all 0.1s linear;
  }
</style>
