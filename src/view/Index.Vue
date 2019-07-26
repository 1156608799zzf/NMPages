<template>
    <div class="indexPage">
      <!--顶部轮播-->
      <section>
        <swiper :options="swiperOption" ref="mySwiper" class="bannerSwiper">
          <!-- slides -->
          <swiper-slide><img src="../../static/images/banner.jpg"></swiper-slide>
          <swiper-slide><img src="../../static/images/banner.jpg"></swiper-slide>
          <swiper-slide><img src="../../static/images/banner.jpg"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
      <!--产品类型模块-->
      <section class="productIconList">
        <div class="title">Alvarez Guitar Selector - Find Your Perfect Guitar</div>
        <div class="list">
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
          <div class="item">
            <img src="../../static/images/productIcon.png">
            <p>Acoustic</p>
          </div>
        </div>
        <div class="moreBtn">View All</div>
        <div class="arrowBtn">
          <img src="../../static/images/bottomArrow.png">
        </div>
      </section>
      <!--新闻资讯-->
      <div class="news">
        <div class="sectionTitleBox">
          <div class="wrap">
            <span class="label">New</span>
            <div class="title">新闻资讯</div>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <img src="../../static/images/banner.jpg">
            <div class="content">
              <div class="title">第十二届（上海）世界旅游博览会圆满闭幕</div>
              <div class="dsc">5月14日-18日，“2015中国·太原国际汽车展览会”将在山西煤炭交易中心举行，本届展会推出新车特卖、品质二手车...</div>
            </div>
          </div>
          <div class="item">
            <img src="../../static/images/banner.jpg">
            <div class="content">
              <div class="title">第十二届（上海）世界旅游博览会圆满闭幕</div>
              <div class="dsc">5月14日-18日，“2015中国·太原国际汽车展览会”将在山西煤炭交易中心举行，本届展会推出新车特卖、品质二手车...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: "Index",
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    }
  }
</script>
