<template>
  <div class="shopListContainer">
    <div class="shopHeader">
      <span class="iconfont icon-xuanxiang"></span>
      <span>附近商家</span>
    </div>
    <ul class="listul">
      <li class="listli" v-for="(item,i) in shopList">
        <a href="javascript:;" class="clearFix">
          <img :src="'../../static/images/shop/'+(i+1)%5+'.jpg'" alt="">
          <div class="shopRight">
            <div class="one">
              <h4 class="title">{{item.name}}</h4>
              <ul class="tag">
                <li>保</li>
              </ul>
            </div>
            <div class="two">
              <div class="textLeft">
                <span class="score">4.2</span>
                <span>月售{{item.recent_order_num}}单</span>
              </div>
              <span class="deliver">硅谷专送</span>
            </div>
            <div class="three"><p>¥20起送/{{item.piecewise_agent_fee.tips}}</p></div>
          </div>
        </a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "homeShopList",
    data() {
      return {}
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
