<template>
  <div class="comment">
    <div class="wrapper" ref="wrapper">
      <div>
        <div class="score">
          <div class="scoreLeft">
            <p>4.2</p>
            <p>综合评分</p>
            <p>高于其他商家</p>
          </div>
          <div class="scoreRight">
            <div>
              <van-rate class="star" v-model="4.1" allow-half void-icon="star"
                        readonly size="15px" void-color="#eee"/>
              <span>商家服务</span><span>4.1</span>
            </div>
            <div>
              <van-rate class="star" v-model="4.2" allow-half void-icon="star"
                        readonly size="15px" void-color="#eee"/>
              <span>商品评分</span><span>4.2</span>
            </div>
            <div><span>送达时间</span><span>28分钟</span></div>
          </div>
        </div>
        <div class="type">
          <ul>
            <li class="active">全部</li>
            <li>满意</li>
            <li>不满意</li>
          </ul>
          <div class="switch on">
            <span class="iconfont icon-check_circle"></span> <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <ul class="list">
          <li v-for="item in ratings">
            <img :src="item.avatar" alt="">
            <div class="right">
              <div class="title"><span>{{item.username}}</span><span>{{item.rateTime}}</span></div>
              <div class="starDiv">
                <van-rate class="star" v-model="item.score" allow-half void-icon="star"
                          readonly size="15px" void-color="#eee"/>
                {{item.deliveryTime}}
              </div>
              <div class="content">{{item.text}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import data from '../../../api/data.json'

  export default {
    name: "Comment",
    data() {
      return {
        ratings: []
      }
    },
    methods: {},
    created() {
      this.ratings = data.ratings;
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          //使其不拦截点击事件
          click: true
        });
      });
    }
  }
</script>

<style scoped lang="scss">

  .comment {
    width: 100%;
    flex: 1;
    overflow: hidden;

    .wrapper {
      width: 100%;
      height: 100%;


      .score {
        height: 120px;
        padding: 10px;
        display: flex;

        .scoreLeft {
          width: 150px;
          border-right: 1px solid #f1f1f1;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;

          p {
            &:first-of-type {
              font-size: 24px;
              color: #f90;
              margin-bottom: 5px;
            }

            &:nth-of-type(2) {
              font-size: 12px;
              color: #07111b;
              margin-bottom: 5px;
            }

            &:last-of-type {
              font-size: 10px;
              color: #93999f;
            }
          }
        }


        .scoreRight {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 15px;

          > div {
            margin-bottom: 10px;

            .star {
              display: inline-block;


            }

            > span {
              margin-left: 8px;
              font-size: 12px;
              color: #07111b;

              &:last-of-type {
                font-size: 12px;
                color: #f90;
              }
            }

          }
        }

      }

      .type {
        border-top: 20px solid #f3f5f7;
        border-bottom: 1px solid #f3f5f7;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
        padding: 10px;

        ul {
          display: flex;

          li {
            padding: 10px;
            color: #4d555d;
            background: rgba(77, 85, 93, 0.2);
            margin-right: 20px;
            font-size: 12px;

            &.active {
              color: white;
              background: #02a774;
            }
          }
        }
      }

      .list {
        li {
          padding: 10px;
          display: flex;
          border-bottom: 1px solid #f1f1f1;

          img {
            width: 30px;
            border-radius: 15px;
            height: 30px;
            margin-right: 20px;
          }

          .right {
            flex: 1;

            .title {
              margin-bottom: 5px;
              display: flex;
              justify-content: space-between;

              span {
                &:first-of-type {
                  font-size: 10px;
                  color: #07111b;
                }

                &:last-of-type {
                  font-size: 10px;
                  color: #93999f;
                }
              }
            }

            .starDiv {
              margin-bottom: 5px;
              font-size: 10px;
              color: #93999f;
              height: 20px;
              line-height: 20px;

              .star {
                display: inline-block;
              }
            }

            .content {
              color: #07111b;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

</style>
