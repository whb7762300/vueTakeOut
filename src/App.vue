<template>
  <div id="app">
    <router-view/>
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
