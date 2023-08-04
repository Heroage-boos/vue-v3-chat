<template>
    <div class="data-manange-container">
        <button @click="handleGetZhihuData()">知乎数据（未登录）内容数据同步至数据库</button>
    </div>
</template>
  

<script setup lang="ts">
import { ref } from 'vue';
import { fetchZhihuContentData } from '@/api/dataManmage/index'


const handleGetZhihuData = (): void => {
    fetchZhihuContentData().then((result) => {
        if (result.code === 200) {
            console.log("数据同步成功!")
        }
    })
}

</script>
  
<style lang="scss" scoped>
.data-manange-container {
    margin-top: 100px;
}
</style>
  