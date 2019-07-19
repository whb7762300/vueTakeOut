<template>
  <div class="storeInfo">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <ul class="one">
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
        <div class="horWrapper" ref="horWrapper">
          <ul class="two clearFix" :style="{width:ulWidth+'px'}">
            <li v-for="item in pictures"><img :src="item" alt=""></li>
          </ul>
        </div>
        <ul class="three">
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import data from '../../../api/data.json'

  export default {
    name: "StoreInfo",
    data() {
      return {
        pictures: []
      }
    },
    methods: {},
    created() {
      this.pictures = data.info.pics;
    },
    mounted() {
      this.$nextTick(() => {
        this.verScroll = new BScroll(this.$refs.wrapper, {
          //使其不拦截点击事件
          click: true
        });
        this.horScroll = new BScroll(this.$refs.horWrapper, {
          //使其不拦截点击事件
          click: true,
          scrollX: true // 水平滑动
        });
      });
    },
    computed: {
      ulWidth() {
        let width = this.pictures.length * (120 + 10);
        return width;
      }
    }
  }
</script>

<style scoped lang="scss">
  .storeInfo {
    flex: 1;
    width: 100%;
    overflow: hidden;

    .wrapper {
      width: 100%;
      height: 100%;

      .content {
        .one {
          li {
            height: 50px;
            background: white;
            line-height: 50px;
          }
        }

        .two {
          display: flex;

          li {

            margin-left: 10px;

            img {
              width: 120px;
              height: 90px;
            }
          }
        }

        .three {
          li {
            height: 50px;
            background: white;
            line-height: 50px;
          }
        }
      }
    }
  }
</style>
