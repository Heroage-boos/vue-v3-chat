<template>
  <div class="home-container">
    <div class="con-search">
      <search />
    </div>

    <div class="web-nav">
      <div>快捷导航：</div>
      <div
        v-for="(n, index) in navData"
        :key="index"
        class="nav-con"
        @click="handleHref(n['web_url'])"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#' + n['web_img']"></use>
        </svg>
        {{ n['web_name'] }}
      </div>
    </div>
    <div class="padding-l-20">网易云段子: <span v-html="wangYiYunInfo"></span></div>
    <div class="con-nav-detail">
      <nav-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from '@/views/home/Search.vue'
import NavContent from '@/views/home/NavContent.vue'
// import Search from "@/components/Search.vue";
import { getQuirsutNav, getWangYiYun } from '@/api/home'

export default defineComponent({
  name: 'HomeView',
  components: {
    Search,
    NavContent
  },
  data: () => {
    return {
      navPage: 1,
      navData: [],
      wangYiYunInfo: ''
    }
  },
  created() {
    this.getQuirsutNav()
    // this.getWangYiYun();
  },
  methods: {
    getQuirsutNav() {
      getQuirsutNav({
        page: this.navPage
      }).then((res: any) => {
        console.log('getQuirsutNav', res)
        this.navData = res.data.result
      })
    },
    handleHref(a: string) {
      console.log('a', a)
      // window.location.href= a  //在当前页面打开窗口
      window.open(a)
    },
    getWangYiYun() {
      getWangYiYun().then((res: any) => {
        console.log('getWangYiYun', res)
        if (res.code === 200) {
          this.wangYiYunInfo = res.data.duanzi
        }
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.home-container {
  // border: solid 1px red;
  display: flex;
  flex-direction: column;
  height: 100%;

  .con-search {
    height: 80px;
    // border: solid 1px green;
  }

  .con-nav-dateil {
    flex: 1;
    // border: solid 1px pink;
  }

  .web-nav {
    display: flex;
    align-items: center;
    height: 32px;
    margin-top: 20px;
    padding: 0 20px;

    // padding:0 20px;
    .nav-con {
      margin-right: 35px;
      cursor: pointer;
    }
  }

  .con-nav-detail {
    margin-top: 10px;
  }
}
</style>
