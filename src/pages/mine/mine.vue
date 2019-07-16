<template>
  <div class="mineContainer">
    <title-bar title="我的"></title-bar>
    <router-link tag="div" class="info clearFix"
                 :to="$store.state.userInfo._id?'/userinfo':'/login'">
      <div class="ivHeadInfo">
        <i class="iconfont icon-person ivhead"></i>
      </div>
      <div class="phoneInfo">
        <p class="login">{{$store.state.userInfo.name||'登录/注册'}}</p>
        <p class="phoneNum">
          <span class="iconfont icon-shouji icon-mobile"></span>
          <span>{{$store.state.userInfo.phone||'暂无绑定手机号'}}</span>
        </p>
      </div>
      <div class="arrow">
        <i class="iconfont icon-jiantou1 "></i>
      </div>
    </router-link>
    <div class="moneyInfo">
      <div>
        <div><span>0.00</span><span>元</span></div>
        <p>我的余额</p>
      </div>
      <div>
        <div><span>0</span><span>个</span></div>
        <p>我的优惠券</p>
      </div>
      <div>
        <div><span>0</span><span>分</span></div>
        <p>我的积分</p>
      </div>
    </div>

    <van-button type="danger" class="loginOut" @click="loginOut" size="large"
                v-if="$store.state.userInfo._id">退出登录
    </van-button>
  </div>
</template>

<script>
  import titleBar from '../../components/titleBar.vue'
  import {reqLoginOut} from '../../api/index.js'
  import {CLEAR_USER_INFO} from '../../store/mutations-type.js'
  import {Toast, Dialog} from 'vant'

  export default {
    name: "mine",
    data() {
      return {}
    },
    methods: {
      loginOut() {
        Dialog.confirm({
          message: '确定退出吗?'
        })
          .then(() => {
            return reqLoginOut()
          })
          .then(res => {
            Toast('登出成功');
            this.$store.commit(CLEAR_USER_INFO);
          }).catch(res => {
          if (res == 'cancel') {
            Toast('取消');
          } else {
            Toast('登出失败');
          }
        });
      }
    },
    created() {
    },
    components: {
      titleBar
    }
  }
</script>

<style scoped lang="scss">
  @import '../../css/color.scss';

  .mineContainer {
    padding-top: 45px;

    .info {
      border-top: 1px solid white;
      position: relative;
      background: $takeoutColor;
      padding: 10px;

      .ivHeadInfo {
        float: left;
        overflow: hidden;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 30px;

        .ivhead {

          color: #e4e4e4;
          font-size: 62px;
        }
      }

      .phoneInfo {
        float: left;
        margin-left: 10px;

        .login {
          margin-top: 5px;
          font-size: 18px;
          color: white;
        }

        .phoneNum {
          margin-top: 10px;
          font-size: 15px;
          color: white;
        }
      }

      .arrow {
        position: absolute;
        right: 10px;
        top: 50%;
        color: white;
        transform: translateY(-50%);
      }
    }

    .moneyInfo {
      display: flex;
      border-bottom: 1px solid #f1f1f1;

      > div {
        border-right: 1px solid #f1f1f1;
        height: 80px;
        width: 33.33%;
        text-align: center;

        > div {
          margin-top: 15px;

          span {
            &:nth-of-type(1) {
              font-size: 30px;
              color: orange;
            }

            &:nth-of-type(2) {

            }
          }
        }

        > p {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }
      }
    }

    .loginOut {
      width: 80%;
      display: block;
      margin: 20px auto;
    }
  }
</style>
