<template>
  <div>
    <div class="back"
         :style="{backgroundImage:'url(https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png)'}">
      <a href="javascript:;" class="iconfont icon-jiantou2" @click="goBack"></a>
    </div>
    <div class="headerContent" @click="showShopDialog = true">
      <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt=""
           class="imgShop">
      <div class="shopName"><span>品牌</span><span>嘉和一品</span><span
        class="arrow"> > </span></div>
      <div data-v-4467cdbc="" class="shop-message"><span data-v-4467cdbc=""
                                                         class="shop-message-detail">4.2</span>
        <span data-v-4467cdbc="" class="shop-message-detail">月售90单</span> <span data-v-4467cdbc=""
                                                                                class="shop-message-detail">
          硅谷专送
          <span data-v-4467cdbc="">约28分钟</span></span> <span data-v-4467cdbc=""
                                                             class="shop-message-detail">距离1000m</span>
      </div>
      <div class="youhui">
        <div><span>首单</span>新用户下单立减18元</div>
        <div>8个优惠<span class="angle"></span></div>
      </div>
    </div>
    <transition name="van-fade">
      <store-shop-dialog @dismissShopDiolog="dismissShopDiolog" :show="showShopDialog"
                         v-show="showShopDialog"></store-shop-dialog>
    </transition>

  </div>
</template>

<script>
  import storeShopDialog from './StoreShopDialog.vue'

  export default {
    name: "StoreHead",
    data() {
      return {
        showShopDialog: false
      }
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      dismissShopDiolog() {
        this.showShopDialog = false;
      }
    },
    created() {
    },
    components: {
      storeShopDialog
    }
  }
</script>

<style scoped lang="scss">
  .back {
    height: 50px;
    position: relative;
    /*background-position: top;*/
    background-size: cover;
    background-repeat: no-repeat;

    > a {
      display: inline-block;
      position: absolute;
      padding: 5px;
      top: 50%;
      font-size: 20px;
      color: white;
      transform: translateY(-50%);
    }


  }

  .headerContent {
    text-align: center;
    padding-top: 40px;
    position: relative;

    .imgShop {
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      border: 1px solid #f1f1f1;
      box-shadow: 0 0 1px #b8bbbf;
      transform: translate(-50%, -50%);
      width: 66px;
      height: 66px;
    }

    .shopName {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        &:first-of-type {
          background: yellow;
          padding: 3px;
          margin-right: 10px;
          font-size: 13px;
        }

        &:nth-of-type(2) {
          margin-right: 10px;
          font-weight: bold;
          font-size: 20px;
        }
      }

      .arrow {
      }
    }

    .shop-message {
      > span {
        font-size: 12px;
      }
    }

    .youhui {
      display: flex;
      justify-content: space-around;
      border: 1px solid #f1f1f1;

      > div {
        font-size: 12px;
        height: 25px;
        line-height: 25px;

        &:first-of-type {
          span {
            &:first-of-type {
              padding: 0 3px;
              background: #02a774;
            }
          }
        }

        .angle {
          display: inline-block;
          width: 0;
          height: 0;
          border: 5px solid;
          border-color: gray transparent transparent transparent;
        }
      }
    }

  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s linear;
  }
</style>
