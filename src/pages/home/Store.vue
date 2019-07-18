<template>
  <div class="storeContainer">
    <store-head></store-head>
    <ul class="tab">
      <router-link tag="li" to="/store/orderfood"
                   :class="[$route.path=='/store/orderfood'?'active':'']">
        <span>点餐</span>
      </router-link>
      <router-link tag="li" to="/store/comment"
                   :class="[$route.path=='/store/comment'?'active':'']">
        <span>评价</span>
      </router-link>
      <router-link tag="li" to="/store/storeinfo"
                   :class="[$route.path=='/store/storeinfo'?'active':'']">
        <span>商家</span>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import storeHead from '../../components/StoreHead.vue'


  export default {
    name: "goodsDetail",
    data() {
      return {}
    },
    methods: {},
    created() {
    },
    components: {
      storeHead
    }
  }
</script>

<style scoped lang="scss">
  @import "../../css/color.scss";
  @import "../../css/mixin.scss";

  .storeContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .tab {
      display: flex;

      li {
        @include bottom-border-1px(#f1f1f1);
        width: 33.33%;
        text-align: center;
        color: #7e8c8d;

        span {
          font-size: 15px;
          padding: 5px;
          display: inline-block;
        }

        &.active {
          color: $takeoutColor;

          span {
            border-bottom: 2px solid $takeoutColor;
          }
        }
      }
    }


  }
</style>
