<template>
  <div class="order">
    <div class="wrapper" ref="wrapper">
      <ul class="left" ref="left">
        <li v-for="(item ,i) in goods" :class="{current:i==currentIndex}" @click="leftClick(i)"
            class="item">
          <p><img :src="item.icon" v-show="item.icon"
                  class="icon">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="wrapperRight" ref="wrapperRight">
      <ul class="right" ref="right">
        <li v-for="(item ,i) in goods" class="item">
          <h3>{{item.name}}</h3>
          <ul>
            <li v-for="(food ,j) in item.foods">
              <img :src="food.image">
              <div class="content">
                <div class="foodName">{{food.name}}</div>
                <div class="foodSell">月售{{food.sellCount}}份 好评率{{food.rating}}%</div>
                <div class="priceAndCount">
                  <div class="price"><span>¥{{food.price}}</span> <span v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                  <count-control :food="food"></count-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bottomCart">
      <div class="imgCart" @click="cartListShowToogle">
        <span class="iconfont icon-shopping_cart iconCart"></span>
        <div class="num" v-show="$store.getters.getCartCount">{{$store.getters.getCartCount}}</div>
      </div>
      <div class="allPrice">
        <p>¥{{$store.getters.getCartPrice}}</p>
        <p>另需配送费¥10</p>
      </div>
      <div class="minPrice">¥20元起送</div>
    </div>
    <div class="cartList" v-show="showCartListPop" @click="showCartList =false">
      <transition name="up">
        <div class="listWrapper" @click.stop="" v-show="showCartListPop">
          <div class="title">
            <span>购物车</span>
            <span @click="clearCart">清空</span>
          </div>
          <ul class="content">
            <li v-for="item in $store.state.cartFoods">
              <span class="left">{{item.name}}</span>
              <div class="right">
                <div>¥{{item.price}}</div>
                <countControl :food="item"></countControl>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import data from '../../../api/data.json'
  import countControl from '../../../components/ShopCartControl.vue'
  import {CART_FOOD_CLEAR} from '../../../store/mutations-type.js'

  export default {
    name: "Order",
    data() {
      return {
        showCartList: false,
        goods: [],
        info: {},
        tops: [],//右侧所有单元数距离父布局的顶部距离
        leftTops: [],//左侧所有单元数距离父布局的顶部距离
        rightScrollY: 0,
      }
    },
    methods: {
      clearCart() {
        this.showCartList = false;
        console.log("执行了");
        this.$store.commit(CART_FOOD_CLEAR);
      },
      leftClick(index) {
        let scrollY = this.tops[index];
        this.foodScroll.scrollTo(0, -scrollY);
      },
      initScroll() {
        this.$nextTick(() => {
          this.leftScroll = new BScroll(this.$refs.wrapper, {
            //使其不拦截点击事件
            click: true
          });
          this.foodScroll = new BScroll(this.$refs.wrapperRight, {
            click: true,
            probeType: 3,  // 有1,2,3值可选,1过一段时间回调scroll事件,2不会掉fling事件,3实时
          });

          // 给右侧列表绑定scroll监听
          this.foodScroll.on('scroll', ({x, y}) => {
            this.rightScrollY = Math.abs(y);
            console.log(this.leftScroll.scrollerHeight);
          })
        })
      },
      //计算右侧每个条目距离顶部的高
      initTops() {
        let tops = [];
        //第一个肯定是0
        tops.push(0);
        let elements = this.$refs.right.getElementsByClassName('item');
        let top = 0;
        for (let i = 0; i < elements.length; i++) {
          //算出其元素高,并累加前面的元素高,则可算出其距离父元素顶部距离
          top += elements[i].clientHeight;
          tops.push(top);
        }
        this.tops = tops;
      },
      initLeftTops() {
        let tops = [];
        tops.push(0);
        let elements = this.$refs.left.getElementsByClassName('item');
        let top = 0;
        for (let i = 0; i < elements.length; i++) {
          //算出其元素高,并累加前面的元素高,则可算出其距离父元素顶部距离
          top += elements[i].clientHeight;
          tops.push(top);
        }
        this.leftTops = tops;
      },
      cartListShowToogle() {
        if (this.totalCartCount > 0) {
          this.showCartList = !this.showCartList;
        }
      }
    },
    created() {
      this.goods = data.goods;
      this.info = data.info;
    },
    mounted() {
      this.initScroll();
      this.initTops();
      this.initLeftTops();
    },
    components: {
      countControl
    },
    computed: {
      currentIndex() {
        let index = 0;
        for (let i = 0; i < this.tops.length; i++) {
          //不要忘了等于号,否则左侧条目点击就无法匹配出值
          if (this.tops[i] <= this.rightScrollY && this.tops[i + 1] > this.rightScrollY) {
            index = i;
            break;
          }
        }
        return index;
      },
      //显示购物车的滑动列表必须点击了显示,而且购物数量大于0
      showCartListPop() {
        return this.showCartList && this.totalCartCount > 0;
      },
      totalCartCount() {
        return this.$store.getters.getCartCount;
      }
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
          border-bottom: 1px solid #cccccc;
          width: 100%;
          background: #f3f5f7;
          height: 50px;

          &.current {
            background: white;
          }

          p {
            width: 100%;
            height: 100%;
            line-height: 50px;
            text-align: center;
            font-size: 12px;

            img {
              margin-right: 5px;
              height: 12px;
              width: 12px;
            }
          }
        }
      }
    }

    .wrapperRight {
      flex: 1;
      height: 100%;


      .right {
        display: block;
        width: 100%;

        > li {
          display: block;
          border-bottom: 1px solid #f1f1f1;
          width: 100%;

          > h3 {
            padding-left: 14px;
            height: 26px;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            color: #93999f;
            background: #f3f5f7;
          }

          > ul {
            display: block;

            > li {
              display: flex;
              padding: 8px;

              img {
                display: block;
                width: 57px;
                height: 57px;
              }

              .content {
                flex: 1;
                margin-left: 10px;

                .foodName {
                  margin: 2px 0 8px 0;
                  height: 14px;
                  line-height: 14px;
                  font-size: 14px;
                  color: #07111b;
                }

                .foodSell {
                  line-height: 10px;
                  font-size: 10px;
                  color: #93999f;
                }

                .priceAndCount {
                  margin-top: 8px;
                  display: flex;
                  justify-content: space-between;

                  .price {
                    span {
                      &:first-of-type {
                        margin-right: 8px;
                        font-size: 14px;
                        color: #f01414;
                      }

                      &:last-of-type {
                        text-decoration: line-through;
                        font-size: 10px;
                        color: #93999f;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    }


    .bottomCart {
      z-index: 100;
      height: 50px;
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background: black;

      .imgCart {
        display: inline-block;
        position: absolute;
        left: 10px;
        bottom: 10px;
        height: 48px;
        width: 48px;
        border-radius: 25px;
        line-height: 48px;
        background: #02a774;
        color: white;
        border: 5px solid rgba(0, 0, 0, 0.5);

        .num {
          width: 20px;
          height: 20px;
          background: red;
          position: absolute;
          top: -8px;
          border-radius: 10px;
          color: white;
          text-align: center;
          line-height: 20px;
          right: -8px;
        }

        .iconCart {
          display: block;
          text-align: center;
          line-height: 48px;
          font-size: 24px;
          color: white;

        }


      }

      .allPrice {
        color: white;
        margin-left: 80px;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
      }

      .minPrice {
        color: white;
        display: inline-block;
        height: 100%;
        width: 110px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        background: #2b333b;
      }

    }

    .cartList {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 50px;
      background: rgba(0, 0, 0, 0.3);

      .listWrapper {
        position: absolute;
        width: 100%;
        bottom: 0;

        .title {
          display: flex;
          height: 40px;
          line-height: 40px;
          background: #f3f5f7;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          padding-left: 10px;
          padding-right: 10px;
          justify-content: space-between;

          span {
            &:first-of-type {
              font-size: 14px;
              color: #07111b;
            }

            &:last-of-type {
              font-size: 12px;
              color: #00a0dc;
            }
          }
        }

        .content {
          max-height: 200px;
          overflow: auto;
          background: white;

          &::-webkit-scrollbar {
            display: none;
          }

          li {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 50px;
            padding-left: 20px;
            padding-right: 20px;
            border-bottom: 1px solid #f1f1f1;

            .left {
              line-height: 50px;
            }

            .right {
              display: flex;

              > div {
                line-height: 50px;

                &:first-of-type {
                  color: red;
                }

                &:nth-of-type(2) {
                  padding-top: 6px;
                }
              }
            }
          }
        }
      }
    }

    .up-enter, .up-leave-to {
      transform: translateY(100%);
    }

    .up-enter-active, .up-leave-active {
      transition: all 0.3s linear;
    }
  }
</style>
