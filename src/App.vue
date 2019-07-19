<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <home-footer v-show="$route.meta.showFooter"></home-footer>
  </div>
</template>

<script>
  import homeFooter from './components/HomeFooter.vue'
  import titleBar from './components/TitleBar.vue'

  export default {
    name: 'App',
    components: {
      homeFooter,
      titleBar
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
