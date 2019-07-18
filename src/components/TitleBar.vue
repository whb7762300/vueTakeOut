<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    name: "titleBar",
    data() {
      return {}
    },
    methods: {},
    created() {
    },
    props: ['title']
  }
</script>

<style scoped lang="scss">
  @import "../css/mixin.scss";

  .header {
    z-index: 100;
    background: $takeoutColor;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;

    .header_search {
      width: 10%;
      height: 50%;
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);

      .icon-sousuo {
        font-size: 25px;
        color: white;
      }
    }

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        display: block;
        font-size: 20px;
        color: white;
      }
    }
  }
</style>
