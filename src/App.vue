<template>
  <div id="app">
    <router-view/>
    <home-footer v-show="$route.meta.showFooter"></home-footer>
  </div>
</template>

<script>
  import homeFooter from './components/homeFooter.vue'
  import titleBar from './components/titleBar.vue'

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
  }
</style>
