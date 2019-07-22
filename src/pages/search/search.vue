<template>
  <div class="orderContainer">
    <title-bar title="搜索"></title-bar>
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <ul class="list">
      <li v-for="item in searchList">
        <img :src="'http://cangdu.org:8001/img/'+item.image_path" alt="">
        <div>
          <p>{{item.name}}</p>
          <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
          <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {reqSearchList} from '../../api/index.js'
  import titleBar from '../../components/TitleBar.vue'

  export default {
    name: "order",
    data() {
      return {
        searchValue: '',
        searchList: []
      }
    },
    methods: {
      onSearch() {
        let latitude = this.$store.state.latitude;
        let longitude = this.$store.state.longitude;
        reqSearchList(latitude + ',' + longitude, this.searchValue)
          .then(res => {
            console.log(JSON.stringify(res));
            this.searchList = res.data;
          })
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
  .orderContainer {
    padding-top: 45px;
    padding-bottom: 50px;

    .list {

      li {
        border-bottom: 1px solid #f1f1f1;
        display: flex;

        img {
          width: 50px;
          height: 50px;
          margin: 10px;
          display: block;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
</style>
