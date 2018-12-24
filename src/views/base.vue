<template>
  <div class="main" >
    <h1>Personal Information</h1>
    <img class="logo" :src="logoUrl" width="125" height="70" alt="">
    <h2>TALK SONG</h2> 
    
    <div class="container" style="margin-top:68px;">
      <div id="info" class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
              <h3>姓名: 宋超群</h3>
              <h3>性别: 男</h3>
              <h3>年龄: 26</h3>
              <h3>婚姻: 已婚</h3>
          </div>
           <div class="col-lg-4 col-md-6 col-xs-12">
              <h3>姓名: 宋超群</h3>
              <h3>性别: 男</h3>
              <h3>年龄: 26</h3>
              <h3>婚姻: 已婚</h3>
          </div>
           <div class="col-lg-4 col-md-6 col-xs-12">
              <h3>姓名: 宋超群</h3>
              <h3>性别: 男</h3>
              <h3>年龄: 26</h3>
              <h3>婚姻: 已婚</h3>
          </div>
           <div class="col-lg-4 col-md-6 col-xs-12">
              <h3>姓名: 宋超群</h3>
              <h3>性别: 男</h3>
              <h3>年龄: 26</h3>
              <h3>婚姻: 已婚</h3>
          </div>
           <div class="col-lg-4 col-md-6 col-xs-12">
              <h3>姓名: 宋超群</h3>
              <h3>性别: 男</h3>
              <h3>年龄: 26</h3>
              <h3>婚姻: 已婚</h3>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue"
export default {
  name: 'home',
  components:{
    carousel
  },
  data: ()=>{
      return {
          value: 1,
          logoUrl: require("../assets/images/logo.png")//,
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    font-family: sans-serif;
    line-height: 1.5;
    font-size: 15px;
    margin:60px 0;
  }
  .main h2, h1 {
      letter-spacing: 5px;
      font-weight: 400;
  }
  .logo {
    width:200px;
    height: auto;
  }
  .go-top {
      position: fixed;
      width: 41px;
      height: 41px;
      bottom: 0;
      right: 0;
      z-index: 1000;
  }
  .top-swiper {
    border:1px solid #333;
    height:350px;
  }
  #info div {
      text-align: left;
  }
  /* * {
    box-sizing: border-box;
  } */
  
   /*
  .nava {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    border: 1px solid #ccc;
    margin: 32px 0;
  }
  .nava li {
    display: inline-block;
    float: left;
  }
  .nava li:hover {
    background-color: #eee;
  }
  .nava li a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 8px 16px;
  }
  .nava li a:hover  {
    background-color: #eee;
  }*/
  /* photo grid */
  /* .container{
    padding:0 8px;
    filter: grayscale(0.7);
  }
  .column {
    float: left;
    width: 50%;
    padding: 0 8px;
  } */

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  .container::after {
    content: "";
    clear: both;
    display: table;
  }  
  
  @media screen and (min-width:1170px) {
    
  }
  @media screen and (min-width:970px) {
    
  }
  @media only screen and (max-width:750px) {
    .container{
      padding:0 8px;
      filter: grayscale(0.7);
    }
    .column {
      width: 100%;
      padding: 0 8px;
    }

    img {
      width: 100%;
      height: auto;
      margin-bottom: 16px;
    }
  }
</style>
