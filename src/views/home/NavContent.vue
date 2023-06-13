<template>
  <div class="con">
    <!-- //100007微博热搜榜--0 100000百度热点--1 100012微信24h热文--2 100015知乎热榜--3 100020抖音热点榜--4 -->

    <!-- <div class="column">
            <h3>头条热榜</h3>
            <ul>
                <li v-for="x, index in touTiaoHotData" :key="index">
                    <a :href="x.Url" target="_blank">{{ x['title'] }}</a>
                </li>
            </ul>
        </div> -->
    <div class="column mr5">
      <h3>微博热榜</h3>
      <ul>
        <li v-for="(x, index) in wbHotData" :key="index" class="flex-betweet">
          <span class="title-w">
            <a :href="x['link']" target="_blank">{{ x['title'] }}</a></span
          >
          <span>{{ x['hot'] }}</span>
        </li>
      </ul>
    </div>
    <div class="column mr5">
      <h3>百度热榜</h3>
      <ul>
        <li v-for="(x, index) in bdHotData" :key="index" class="flex-betweet">
          <span class="title-w">
            <a :href="x['link']" target="_blank">{{ x['title'] }}</a></span
          >
          <span>{{ x['hot'] }}</span>
        </li>
      </ul>
    </div>
    <div class="column mr5">
      <h3>微信24h热榜</h3>
      <ul>
        <li v-for="(x, index) in wxHotData" :key="index" class="flex-betweet">
          <span>
            <a :href="x['link']" target="_blank">{{ x['title'] }}</a></span
          >
          <span>{{ x['hot'] }}</span>
        </li>
      </ul>
    </div>
    <div class="column mr5">
      <h3>知乎热榜</h3>
      <ul>
        <li v-for="(x, index) in zhHotData" :key="index" class="flex-betweet">
          <span class="title-w">
            <a :href="x['link']" target="_blank">{{ x['title'] }}</a></span
          >
          <span>{{ x['hot'] }}</span>
        </li>
      </ul>
    </div>
    <div class="column">
      <h3>抖音热榜</h3>
      <ul>
        <li v-for="(x, index) in dyHotData" :key="index" class="flex-betweet">
          <span class="title-w">
            <a :href="x['link']" target="_blank">{{ x['title'] }}</a></span
          >
          <span>{{ x['hot'] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getUsers, getNews, tang300, getCsdnHot, getTouTiaoHot, get24Hot } from '@/api/home'

export default defineComponent({
  name: 'NavContent',
  components: {},
  data: () => {
    return {
      touTiaoHotData: [],
      touTiaoPage: {
        total: '',
        size: 10
      },
      wbHotData: [],
      bdHotData: [],
      zhHotData: [],
      dyHotData: [],
      wxHotData: []
    }
  },
  created() {
    getUsers().then((res: unknown) => {
      console.log('getUser', res)
    })
    // this.tang300();
    // this.getNews();
    // this.getCsdnHot()
    // this.getTouTiaoHot();
  },
  mounted() {
    this.get24Hot(0)
    this.get24Hot(1)
    this.get24Hot(2)
    this.get24Hot(3)
    this.get24Hot(4)
  },
  methods: {
    tang300() {
      tang300().then((res: unknown) => {
        console.log('getNews', res)
      })
    },
    getNews() {
      getNews({
        type: 0
      }).then((res: unknown) => {
        console.log('getNews', res)
      })
    },
    getCsdnHot() {
      getCsdnHot({
        size: 10
      }).then((res: unknown) => {
        console.log('getCsdnHot', res)
      })
    },

    getTouTiaoHot() {
      getTouTiaoHot().then((res: any) => {
        console.log('getTouTiaoHot', res)
        this.touTiaoHotData = res.data.slice(0, 10)
        this.touTiaoPage.total = res.data.length
      })
    },
    // 100007微博热搜榜--0   100000百度热点--1  100012微信24h热文--2  100015知乎热榜--3  100020抖音热点榜--4
    get24Hot(type: number) {
      get24Hot({
        type
      }).then((res: any) => {
        console.log('get24Hot', type, res)
        const r = res.data
        if (type === 0) {
          this.wbHotData = r
        }
        if (type === 1) {
          this.bdHotData = r
        }
        if (type === 2) {
          this.wxHotData = r
        }
        if (type === 3) {
          this.zhHotData = r
        }
        if (type === 4) {
          this.dyHotData = r
        }
        // this.touTiaoHotData = res.data.slice(0, 10);
        // this.touTiaoPage.total = res.data.length;
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.con {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
}

.column {
  width: 30%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.column h3 {
  margin-top: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: black;
}

.title-w {
  width: 245px;
}
</style>
