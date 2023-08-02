<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps({
    prefix: {
        type: String,
        default: "icon"
    },
    name: {
        type: String,
        required: true
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
    <div class="content-item">
        <h2>这是标题</h2>
        <p class="text">这是一段要展示的内容，超过100字后会自动换行。这是一段要展示的内容，超过100字后会自动换行。这是一段要展示的内容，超过100字后会自动换行。</p>
        <div class="actions">
            <a href="#" class="comment">评论</a>
            <a href="#" class="like">点赞</a>
            <a href="#" class="favorite">收藏</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-item {
    background-color: #f2f2f2;
    padding: 20px;
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    color: #333;
}

.text {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 10px;
    margin-bottom: 20px;
}

.actions {
    display: flex;
    justify-content: flex-end;
}

.actions a {
    margin-right: 10px;
    color: #999;
    text-decoration: none;
}

.actions a:hover {
    color: #333;
}
</style>
