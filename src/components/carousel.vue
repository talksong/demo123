<template>

 <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg" alt="去哪儿门票" style="opacity: 1;">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1807/78/0f57f90bedbc4102.jpg_750x200_f0d1ad2c.jpg" alt="去哪儿门票" style="opacity: 1;">
      <div class="carousel-caption">
        ...
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
import {swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    name: 'carousel',
    components: {
        swiper, swiperSlide
    },
    data:()=>{
        return{
            swiperOption:{
                pagination:{el:".swiper-pagination"},
                //loop:true使轮播图可以循环轮播
                loop:true,
                autoplay:true,
                //speed是一张图划过的时间长度
                speed:200
            }
        }
    }
}
</script>
<style>
    .carousel{
        
    }
</style>
