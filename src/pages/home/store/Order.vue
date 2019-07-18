<template>
  <div class="order">
    <div class="wrapper" ref="wrapper">
      <ul class="left">
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
      </ul>
    </div>
    <div class="wrapperRight" ref="wrapperRight">
      <ul class="right">
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
        <li><p>条目</p></li>
      </ul>
    </div>
    <div class="bottomCart">购物车</div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import data from '../../../api/data.json'

  export default {
    name: "Order",
    data() {
      return {}
    },
    methods: {},
    created() {
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll(this.$refs.wrapper, {})
        new BScroll(this.$refs.wrapperRight, {})
      })
    }
  }
</script>

<style scoped lang="scss">
  //通过父布局设置flex布局,组布局flex1占据满剩下的高度,使其高度能够固定下来
  .order {
    width: 100%;
    flex: 1;
    display: flex;
    overflow: hidden;
    padding-bottom: 50px;

    .wrapper {
      width: 100px;
      height: 100%;

      .left {
        border-right: 1px solid #f1f1f1;
        width: 100%;

        li {
          border-bottom: 1px solid #f1f1f1;
          width: 100%;
          height: 50px;

          p {
            width: 100%;
            height: 100%;
            line-height: 50px;
            text-align: center;
          }
        }
      }
    }

    .wrapperRight {
      flex: 1;
      height: 100%;


      .right {
        width: 100%;

        li {
          border-bottom: 1px solid #f1f1f1;
          width: 100%;
          height: 50px;

          p {
            width: 100%;
            height: 100%;
            line-height: 50px;
            text-align: center;
          }
        }
      }

    }


    .bottomCart {
      height: 50px;
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background: white;
      border-top: 1px solid #f1f1f1;
    }
  }
</style>
