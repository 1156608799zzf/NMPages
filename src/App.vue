<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Tabbar from './components/Tabbar'
  export default {
    name: 'App',
    components: {
      Navbar,
      Tabbar
    }
  }
</script>

<style>
</style>
