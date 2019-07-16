<template>
  <div class="shopListContainer">
    <div class="shopHeader">
      <span class="iconfont icon-xuanxiang"></span>
      <span>附近商家</span>
    </div>
    <ul class="listul" v-if="shopList.length>0">
      <li class="listli" v-for="(item,i) in shopList" :key="item.id">
        <a href="javascript:;" class="clearFix">
          <img :src="'../../static/images/shop/'+(i+1)%5+'.jpg'" alt="">
          <div class="shopRight">
            <div class="one">
              <h4 class="title">{{item.name}}</h4>
              <ul class="tag clearFix">
                <li>保</li>
                <li>保</li>
              </ul>
            </div>
            <div class="two">
              <div class="textLeft">
                <van-rate class="star" v-model="item.rating" allow-half void-icon="star"
                          readonly size="10px" void-color="#eee"/>
                <span class="score">{{item.rating}}</span>
                <span>月售{{item.recent_order_num}}单</span>
              </div>
              <span class="deliver">硅谷专送</span>
            </div>
            <div class="three"><p>¥20起送/{{item.piecewise_agent_fee.tips}}</p></div>
          </div>
        </a>
      </li>
    </ul>
    <ul v-for="item in 5" v-else>
      <li><img src="../assets/shop_back.svg" alt=""></li>
    </ul>
  </div>
</template>

<script>


  export default {
    name: "homeShopList",
    data() {
      return {
        starValue: 1
      }
    },
    methods: {},
    created() {
    },
    mounted() {
    },
    props: ['shopList']
  }
</script>

<style scoped lang="scss">
  @import "../css/mixin.scss";

  .shopListContainer {

    .shopHeader {
      color: #999;
      font-size: 14px;
      padding: 5px;
    }

    .listul {
      .listli {
        padding: 15px 8px;
        @include bottom-border-1px;

        a {
          img {
            display: block;
            width: 95px;
            height: 75px;
            float: left;
          }

          .shopRight {
            padding-left: 8px;
            overflow: hidden;

            div {
              display: flex;
              justify-content: space-between;

              &.one {
                .tag {
                  li {
                    float: left;
                    margin-left: 3px;
                  }
                }

                .title {
                  color: #333;
                  font-size: 16px;
                  font-weight: bold;

                  &::before {
                    content: '品牌';
                    background: #ffd930;
                    margin-right: 5px;
                    font-size: 12px;
                    color: #333;
                    padding: 2px;
                  }
                }

                ul {
                  li {
                    font-size: 12px;
                    border: 1px solid #f1f1f1;
                  }
                }
              }

              &.two {
                margin: 15px 0;
                font-size: 10px;

                .textLeft {
                  .star {
                    margin-right: 5px;
                    //设置星星的大小
                    /* .van-icon-star {
                       font-size: 12px;
                     }*/
                  }

                  .score {
                    color: orange;
                  }
                }

                .deliver {
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }

              &.three {
                p {
                  color: #333;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
