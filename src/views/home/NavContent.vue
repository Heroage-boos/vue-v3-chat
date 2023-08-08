<template>
  <div class="con">
    <div class="con-warp">
      <div class="con-warp-header">
        <ul>
          <li>推荐</li>
          <li>热搜</li>
          <li>同城</li>
          <li>科技</li>
          <li>体育</li>
          <li>足球</li>
          <li>更多</li>
        </ul>
      </div>
      <div class="content">
        <div class="content-left">
          <ContentItem :contentData="contentData" />
        </div>
        <div class="content-right">
          <TopCard :isMore="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getZhihuContentData } from "@/api/dataManmage/index"
import TopCard from "@/components/TopCard/index.vue"
import ContentItem from "@/components/ContentItem/index.vue"

export default defineComponent({
  name: 'NavContent',
  components: {
    TopCard,
    ContentItem
  },
  data: () => {
    return {
      contentData: [],
    }
  },
  created() {
    this.getContentData();
  },
  mounted() {

  },
  methods: {
    getContentData() {
      getZhihuContentData().then((result: any) => {
        if (result.code === 200) {
          const { data } = result
          console.log("datatata", data)
          this.contentData = data
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.con {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0 20px;
  border: solid 1px red;

  .con-warp {
    display: flex;
    flex-direction: column;
    width: 65%;
    border: solid 1px green;
    // height: 1000px;
    margin-bottom: 100px;

    .con-warp-header {
      background-color: #f2f2f2;
      border-radius: 5px;

      ul {
        display: flex;
        list-style: none;
        align-items: center;
        padding: 0;

        li {
          margin: 0 10px;
          padding: 5px 10px;
          font-size: 16px;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        li:hover {
          background-color: #ccc;
          color: #fff;
          border-radius: 3px;
        }
      }
    }
    .content {
      display: flex;
      justify-content: space-between;

      .content-left {
        flex-basis: 65%;
        border: solid 1px green;

      }

      .content-right {
        flex: 1;
        border: solid 1px green;
      }
    }

  }
}
</style>
