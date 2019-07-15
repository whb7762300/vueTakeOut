<template>
  <div class="homeContainer">
    <title-bar :title="address">
      <a href="javascript:;" slot="left" class="header_search">
        <span class="iconfont icon-sousuo"></span>
      </a>
      <slot name="right"></slot>
    </title-bar>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in categorys">
          <ul>
            <li v-for="(section,index) in item">
              <img :src="'../../../static/images/nav/'+(i*8+index+1)+'.jpg'" alt="">
              <p>{{section.title}}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <shop-list :shopList="shopList"></shop-list>
  </div>
</template>

<script>
  import titleBar from '../../components/titleBar.vue'
  import Swiper from 'swiper/dist/js/swiper.js'
  import 'swiper/dist/css/swiper.min.css'
  import shopList from '../../components/homeShopList.vue'
  import {reqFoodCategorys, reqAddress, reqShopList} from '../../api/index.js'

  export default {
    name: "home",
    data() {
      return {
        address: '',
        categorys: [],
        shopList: []
      }
    },
    methods: {
      getShopList() {
        reqShopList(this.$store.state.latitude, this.$store.state.longitude).then(res => {
          this.shopList = res.data;
        })
      },
      getLocation() {
        reqAddress(this.$store.state.latitude, this.$store.state.longitude).then(res => {
          this.address = res.data.address;
        })
      },
      getCategorys() {
        reqFoodCategorys().then(res => {
          let cates = [];
          let arr = [];
          res.data.forEach((item, i) => {
            arr.push(item);
            if (arr.length === 8) {
              cates.push(arr);
              arr = [];
            }
          });
          this.categorys = cates;
        })
      }
    },
    created() {
      this.getLocation();
      this.getCategorys();
      this.getShopList();
    },
    components: {
      titleBar,
      shopList
    },
    watch: {
      categorys(newValue) {
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          var mySwiper = new Swiper('.swiper-container', {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../css/mixin.scss";

  .homeContainer {
    padding-top: 45px;
    padding-bottom: 50px;

    .swiper-container {
      padding-bottom: 15px;
      @include bottom-border-1px;
      margin-bottom: 10px;

      .swiper-wrapper {
        padding-bottom: 10px;

        .swiper-slide {


          ul {
            display: flex;
            width: 100%;
            flex-wrap: wrap;

            li {
              width: 25%;
              height: 75px;

              img {

                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                margin-bottom: 5px;
              }

              p {
                color: #666;
                font-size: 13px;
                text-align: center;
              }
            }
          }
        }
      }
    }

  }
</style>
