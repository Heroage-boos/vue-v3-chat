<template>
  <div class="web-nav-container">
    <div class="nav-container">
      <div class="nav">
        <div class="nav-con">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="'#' + item['name']"
            class="nav-item"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
      <div class="content">
        <!-- <div v-for="(item, index) in contentItems" :key="index" v-show="activeIndex === index">
                    {{ item }}
                </div> -->
        <h1>My Tab Panel</h1>
        <div class="tab-panel">
          <ul class="tab-nav">
            <li :class="{ active: activeTab === 1 }" @click="setActiveTab(1)">Tab 1</li>
            <li :class="{ active: activeTab === 2 }" @click="setActiveTab(2)">Tab 2</li>
            <li :class="{ active: activeTab === 3 }" @click="setActiveTab(3)">Tab 3</li>
          </ul>
          <div class="tab-content">
            <div v-show="activeTab === 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate justo ac
                bibendum dapibus. Aliquam lacinia sapien sed mauris mattis, a efficitur ipsum
                consequat. Donec non ante elit. Fusce quis augue vel diam faucibus accumsan. Sed
                vitae enim vel ligula auctor pharetra. Duis iaculis malesuada interdum. Fusce
                euismod nunc id nibh tristique, a bibendum justo dictum.
              </p>
            </div>
            <div v-show="activeTab === 2">
              <p>
                Phasellus blandit mi et ipsum malesuada, in pretium lorem bibendum. Ut fringilla
                urna ligula, nec luctus ipsum bibendum ac. Donec euismod, quam id interdum rutrum,
                libero magna bibendum velit, at consequat dui lorem vel urna. Fusce eget dolor
                libero. Donec euismod, quam id interdum rutrum, libero magna bibendum velit, at
                consequat dui lorem vel urna. Fusce eget dolor libero.
              </p>
            </div>
            <div v-show="activeTab === 3">
              <p>
                Sed sit amet nibh in velit rhoncus hendrerit. Sed porta ligula ut ex blandit, vel
                eleifend nibh malesuada. Integer in enim eget odio efficitur lobortis. Quisque non
                imperdiet erat. In luctus mi vel est pharetra, quis iaculis eros aliquet. Mauris
                lobortis tellus vitae erat dapibus, in tristique arcu luctus. Integer scelerisque
                dolor vel enim elementum, vitae imperdiet ipsum dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WebNav',
  data() {
    return {
      navItems: [
        {
          title: '分类导航',
          name: 'class'
        },
        {
          title: '生活休闲',
          name: 'life'
        },
        {
          title: '影视资源',
          name: 'movie'
        },
        {
          title: '读物学习',
          name: 'study'
        },
        {
          title: '搜索查询',
          name: 'search'
        },
        {
          title: '模板图库',
          name: 'template'
        },
        {
          title: '软件工具',
          name: 'tools'
        },
        {
          title: '媒体运营',
          name: 'media'
        },
        {
          title: '音乐MV',
          name: 'music'
        },
        {
          title: '导航网址',
          name: 'navigation'
        }
      ],
      contentItems: ['Content 1', 'Content 2', 'Content 3'],
      activeIndex: 0,
      activeTab: 1
    }
  },
  methods: {
    setActive(index: number) {
      this.activeIndex = index
    },
    setActiveTab(tab: number) {
      this.activeTab = tab
    }
  }
})
</script>

<style lang="scss" scoped>
.web-nav-container {
  .nav-container {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    .nav {
      position: fixed;
      top: 64.39px;
      height: 100%;
      border: solid 1px red;
      width: 130px;

      .nav-con {
        display: flex;
        flex-direction: column;
        padding: 10px 24px;

        .nav-item {
          margin-top: 25px;
        }
      }
    }

    .content {
      flex: 1;
      max-height: calc(100% - 64.39px);
      overflow-y: hidden;
      margin-left: 130px;
      border: solid 1px red;

      .tab-panel {
        flex-flow: row wrap;
      }

      .tab-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: start;
        background-color: #ddd;
      }

      .tab-nav li {
        cursor: pointer;
        padding: 10px;
        transition: background-color 0.2s ease-in-out;
      }

      .tab-nav li.active {
        background-color: #fff;
      }

      .tab-content {
        flex: 3;
        background-color: #fff;
        padding: 10px;
      }
    }
  }
}
</style>
