<template>
    <div class="rank-item">
        <div class="rank-item-title">
            排行榜1
            <i class="fas fa-sync-alt" @click="refreshRank"></i>
        </div>
        <ul class="rank-item-list">
            <li v-for="item in rankList" :key="item">{{ item }}</li>
        </ul>
        <div class="load-more" v-if="isMore">
            <button @click="loadMore">加载更多</button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    isMore: {
        type: Boolean
    }
})

const rankList = ref([
    '排行榜1-1',
    '排行榜1-2',
    '排行榜1-3',
    '排行榜1-4',
    '排行榜1-5'
]);

const refreshRank = () => {
    // 模拟刷新数据
    rankList.value = [
        '刷新后的排行榜1-1',
        '刷新后的排行榜1-2',
        '刷新后的排行榜1-3',
        '刷新后的排行榜1-4',
        '刷新后的排行榜1-5'
    ];
};

const loadMore = () => {
    // 模拟加载更多数据
    const moreItems = [
        '加载更多1',
        '加载更多2',
        '加载更多3',
        '加载更多4',
        '加载更多5'
    ];
    rankList.value = [...rankList.value, ...moreItems];
};
</script>
  
<style scoped>
.rank-item {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.rank-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rank-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    transition: background-color 0.3s ease;
}

.rank-item-list li:last-child {
    border-bottom: none;
}

.rank-item-list li:hover {
    background-color: #f5f5f5;
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
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
}

.load-more button:hover {
    background-color: #0062cc;
}

.load-more button i {
    margin-right: 5px;
}
</style>
  