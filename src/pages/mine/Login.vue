<template>
  <div class="loginContainer">
    <a href="javascript:;" class="iconfont icon-jiantou2 back" @click="goBack"></a>
    <h2 class="title">外卖</h2>
    <div class="tab">
      <span :class="{active:!pwdLogin}" @click="pwdLogin=false">短信登录</span>
      <span :class="{active:pwdLogin}" @click="pwdLogin=true">密码登录</span>
    </div>

    <div class="loginType">
      <div class="codeLogin" v-if="!pwdLogin">短信登录</div>
      <div class="pwdLogin" v-else>
        <input type="text" placeholder="请输入用户名" class="userName" maxlength="12" v-model="name">
        <div class="pwdContainer">
          <input type="password" placeholder="请输入密码" class="pwd" maxlength="12" v-model="pwd"
                 ref="inputPwd">
          <van-switch v-model="checked" @change="switchChange" class="switch" size="20px"
                      active-color="green"/>
        </div>
        <div class="codeContainer">
          <input type="text" placeholder="请输入验证码" class="inputCode" maxlength="6" v-model="captcha">
          <img src="http://localhost:4000/captcha" alt="" class="imgCode" ref="imgCode"
               @click="getNewCode">
        </div>
      </div>

      <van-button type="primary" class="btnCommit" @click="commit">登录</van-button>
    </div>
  </div>
</template>

<script>
  import {reqPwdLogin} from '../../api/index.js'
  import {Toast} from 'vant';
  import {SET_USER_INFO} from '../../store/mutations-type.js';

  export default {
    name: "login",
    data() {
      return {
        checked: false,
        pwdLogin: true,
        name: '',//账号
        pwd: '',//密码
        captcha: ''//验证码
      }
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      getNewCode() {
        this.$refs.imgCode.src = "http://172.17.0.81:4000/captcha?time=" + Date.now();
      },
      commit(event) {
        if (this.name == '') {
          Toast('请输入用户名');
          return;
        }
        if (this.pwd == '') {
          Toast('请输入密码');
          return;
        }
        if (this.captcha == '') {
          Toast('请输入验证码');
          return;
        }
        reqPwdLogin({name: this.name, pwd: this.pwd, captcha: this.captcha}).then(res => {
          this.$store.commit(SET_USER_INFO, res.data);
          this.$router.push('/mine');
        }).catch(res => {
          this.getNewCode();
          Toast(res);
        })
      },
      switchChange(checked) {
        if (this.checked) {
          this.$refs.inputPwd.type = 'text';
        } else {
          this.$refs.inputPwd.type = 'password';
        }
      }
    },
    created() {
    }
  }
</script>


<style scoped lang="scss">
  @import "../../css/color.scss";

  .loginContainer {
    .back {
      display: block;
      margin: 10px;
    }

    .title {
      text-align: center;
      font-weight: bold;
      color: $takeoutColor;
      font-size: 40px;
      margin-top: 40px;
    }

    .tab {
      margin-top: 25px;
      text-align: center;

      > span {
        padding-bottom: 5px;
        font-size: 14px;

        &:first-of-type {
          margin-right: 30px;
        }

        &.active {
          color: $takeoutColor;
          border-bottom: 2px solid $takeoutColor;
        }
      }
    }

    .loginType {
      margin-top: 20px;

      .pwdLogin {
        input {
          font-size: 14px;
          padding: 0 10px;
          display: block;
          margin: 0 auto;
          width: 80%;
          height: 45px;
          border: 1px solid #ddd;
          border-radius: 4px;

          &:focus {
            border: 1px solid $takeoutColor;
          }


        }

        .pwdContainer {
          position: relative;
          margin-top: 10px;

          .switch {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 12%;
          }
        }

        .codeContainer {
          position: relative;
          margin-top: 10px;

          > input {
            margin-top: 0;
          }

          .imgCode {
            height: 45px;
            display: block;
            position: absolute;
            right: 12%;
            top: 0;
          }
        }
      }
    }

    .btnCommit {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      width: 80%;
    }
  }
</style>
