<template>
  <div class="swiper-con">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(i, index) in weiperData" :key="index">
        <div class="showcase" :style="`background: url(${i.url}) no-repeat center center/cover`">
          <h2>Surface Deals</h2>
          <p>Select Surfaces are on sale now - save while supplies last</p>
          <a href="#" class="btn"> Shop Now <i class="fas fa-chevron-right"></i> </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

export default defineComponent({
  name: 'HeaderSilder',
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => {
    return {
      modules: [Pagination],
      weiperData: [
        {
          url: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'
        },
        {
          url: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg'
        }
      ]
    }
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
/* Showcase */
.showcase {
  width: 100%;
  height: 400px;
  // background: url('@assets/cloud-shop/swiper-cat.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  padding-bottom: 50px;
  margin-bottom: 20px;
}

.showcase h2,
.showcase p {
  margin-bottom: 10px;
}

.showcase .btn {
  margin-top: 20px;
}
</style>
