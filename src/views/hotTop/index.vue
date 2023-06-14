<template>
  <div class="container">
    <div class="title">热门排行榜</div>
    <div class="rank-list">
      <div class="rank-item">
        <div class="rank-item-title">排行榜1</div>
        <ul class="rank-item-list">
          <li>排行榜1-1</li>
          <li>排行榜1-2</li>
          <li>排行榜1-3</li>
          <li>排行榜1-4</li>
          <li>排行榜1-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <!-- 更多排行榜... -->
    </div>
    <div class="title">其他热门排行榜</div>
    <div class="rank-list">
      <div class="rank-item">
        <div class="rank-item-title">排行榜1</div>
        <ul class="rank-item-list">
          <li>排行榜1-1</li>
          <li>排行榜1-2</li>
          <li>排行榜1-3</li>
          <li>排行榜1-4</li>
          <li>排行榜1-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <div class="rank-item">
        <div class="rank-item-title">排行榜2</div>
        <ul class="rank-item-list">
          <li>排行榜2-1</li>
          <li>排行榜2-2</li>
          <li>排行榜2-3</li>
          <li>排行榜2-4</li>
          <li>排行榜2-5</li>
        </ul>
      </div>
      <!-- 更多排行榜... -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HotTop'
})
</script>

<style lang="scss" scoped>
.container {
  // max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.rank-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px;
}

.rank-item {
  width: calc(25% - 20px);
  margin: 0 10px 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.rank-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rank-item-title {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.rank-item-list {
  padding: 10px;
}

.rank-item-list li {
  padding: 5px 0;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  border-bottom: 1px solid #eee;
}

.rank-item-list li:last-child {
  border-bottom: none;
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.load-more button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.load-more button:hover {
  background-color: #0062cc;
}
</style>
