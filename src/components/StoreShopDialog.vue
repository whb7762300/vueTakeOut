<template>
  <div class="dialogContainer">
    <div class="content">我是弹窗的内容</div>
    <span class="iconfont icon-close close" @click="dismiss"></span>
  </div>
</template>

<script>
  export default {
    name: "StoreShopDialog",
    data() {
      return {}
    },
    methods: {
      dismiss() {
        this.$emit('dismissShopDiolog');
      }
    },
    created() {
    },
    props: ['show'],
    watch: {
      show(newValue) {
        console.log(newValue);
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialogContainer {
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .content {
      border-radius: 5px;
      background: white;
      width: 250px;
      height: 300px;
      text-align: center;
      line-height: 300px;
    }

    .close {
      display: inline-block;
      margin-top: 30px;
      color: white;
    }

  }

</style>
