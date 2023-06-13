<template>
  <div class="home-container">
    <div class="con-search">
      <search />
    </div>

    <div class="web-nav">
      <div>快捷导航：</div>
      <div v-for="(n, index) in navData.data" :key="index" class="nav-con" @click="handleHref(n['web_url'])">
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

<script setup lang="ts">
import Search from '@/views/home/Search.vue'
import NavContent from '@/views/home/NavContent.vue'
import { getQuirsutNav, getWangYiYun } from '@/api/home'
import { onBeforeMount, reactive } from 'vue';

let navPage: number = 1
let navData = reactive({
  data: []
})
let wangYiYunInfo: string = ''

onBeforeMount(() => {
  getQuirsutNavMethod()
  // this.getWangYiYunMethod();
})

const getQuirsutNavMethod = (): void => {
  getQuirsutNav({
    page: navPage
  }).then((res: any) => {
    console.log('getQuirsutNav', res)
    navData.data = res.data.result
  })
}

const handleHref = (a: string): void => {
  console.log('a', a)
  // window.location.href= a  //在当前页面打开窗口
  window.open(a)
}

const getWangYiYunMethod = (): void => {
  getWangYiYun().then((res: any) => {
    console.log('getWangYiYun', res)
    if (res.code === 200) {
      wangYiYunInfo = res.data.duanzi
    }
  })
}
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
