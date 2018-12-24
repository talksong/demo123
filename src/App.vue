<template>
  <div id="app">
    <headerr></headerr>
    <router-view/>
    <footerr></footerr>
  </div>
</template>

<script>
import headerr from '@/components/header_demo.vue'
import footerr from '@/components/footer_demo.vue'
export default {
  name: 'App',
  components:{
    headerr,footerr
  }
}
</script>

<style>
@import url("assets/fonts/font.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  position: relative;
  margin-top: 60px; 
  background:url('assets/images/bg1.png') repeat, url('assets/images/bg0.png') repeat;
}
</style>
