<template>
  <div class="footContainer">
    <ul class=".bottom-border-1px">
      <li>
        <router-link href="javascript:;" :class="[$route.path=='/home'?'active':'']" to="/home">
          <span class="iconfont icon-waimai"></span>
          <p>外卖</p>
        </router-link>
      </li>
      <li>
        <router-link href="javascript:;" :class="[$route.path=='/search'?'active':'']" to="/search">
          <span class="iconfont icon-search"></span>
          <p>搜索</p>
        </router-link>
      </li>
      <li>
        <router-link href="javascript:;" :class="[$route.path=='/order'?'active':'']" to="/order">
          <span class="iconfont icon-dingdan"></span>
          <p>订单</p>
        </router-link>
      </li>
      <li>
        <router-link href="javascript:;" :class="[$route.path=='/mine'?'active':'']" to="/mine">
          <span class="iconfont icon-geren"></span>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    created() {
    }
  }
</script>

<style scoped lang="scss">
  @import "../css/mixin.scss";

  .footContainer {
    z-index: 100;
    background: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;


    ul {
      @include top-border-1px;
      width: 100%;
      height: 100%;
      display: flex;

      li {
        width: 25%;
        height: 100%;

        a {
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;

          &.active {
            color: $takeoutColor;
          }

          span {
            display: block;
            margin: 5px auto;
          }

          p {

          }
        }
      }
    }
  }
</style>
