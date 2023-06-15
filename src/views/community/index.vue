<template>
  <div class="header">
    <div class="logo">社区</div>
    <div class="menu">
      <div class="menu-item">首页</div>
      <div class="menu-item">发现</div>
      <div class="menu-item">关注</div>
      <div class="menu-item">消息</div>
      <div class="menu-item">我的</div>
    </div>
  </div>
  <div class="main">
    <div class="sidebar">
      <div class="widget">
        <div class="widget-title">热门话题</div>
        <div class="widget-content">
          <ul>
            <li>话题1</li>
            <li>话题2</li>
            <li>话题3</li>
            <li>话题4</li>
            <li>话题5</li>
          </ul>
        </div>
      </div>
      <div class="widget">
        <div class="widget-title">热门用户</div>
        <div class="widget-content">
          <ul>
            <li>用户1</li>
            <li>用户2</li>
            <li>用户3</li>
            <li>用户4</li>
            <li>用户5</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="tab">
        <div class="tab-item active">最新</div>
        <div class="tab-item">热门</div>
        <div class="tab-item">推荐</div>
      </div>
      <div class="post">
        <div class="post-image"></div>
        <div class="post-content">
          <div class="post-title">文章标题</div>
          <div class="post-meta">作者 · 发布时间</div>
          <div class="post-excerpt">文章摘要</div>
          <div class="post-readmore">阅读全文</div>
        </div>
      </div>
      <div class="post">
        <div class="post-image"></div>
        <div class="post-content">
          <div class="post-title">文章标题</div>
          <div class="post-meta">作者 · 发布时间</div>
          <div class="post-excerpt">文章摘要</div>
          <div class="post-readmore">阅读全文</div>
        </div>
      </div>
      <div class="post">
        <div class="post-image"></div>
        <div class="post-content">
          <div class="post-title">文章标题</div>
          <div class="post-meta">作者 · 发布时间</div>
          <div class="post-excerpt">文章摘要</div>
          <div class="post-readmore">阅读全文</div>
        </div>
      </div>
      <div class="pagination">
        <button>上一页</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>下一页</button>
      </div>
      <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
          <div class="card-title">卡片标题</div>
          <div class="card-excerpt">卡片摘要</div>
          <div class="card-meta">
            <span>作者</span>
            <span>发布时间</span>
            <span>标签</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <i class="card-footer-icon">&#10084;</i>
            <span>点赞</span>
          </div>
          <div class="card-footer-item">
            <i class="card-footer-icon">&#128172;</i>
            <span>评论</span>
          </div>
          <div class="card-footer-item">
            <i class="card-footer-icon">&#10148;</i>
            <span>分享</span>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="comment-avatar"></div>
        <div class="comment-content">
          <div class="comment-meta">评论者 · 评论时间</div>
          <div class="comment-text">评论内容</div>
          <div class="comment-reply">回复</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #007bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu {
  display: flex;
}

.menu-item {
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.menu-item:hover {
  text-decoration: underline;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sidebar {
  width: 300px;
  margin-right: 20px;
}

.widget {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
}

.widget-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.widget-content {
  font-size: 14px;
  line-height: 1.5;
}

.content {
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
}

.post {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.post-image {
  width: 80px;
  height: 80px;
  background-color: #eee;
  margin-right: 20px;
}

.post-content {
  flex: 1;
  font-size: 16px;
}

.post-title {
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
}

.post-title:hover {
  text-decoration: underline;
}

.post-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.post-excerpt {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.post-readmore {
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
}

.post-readmore:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #0062cc;
}

.tab {
  display: flex;
  margin-bottom: 20px;
}

.tab-item {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

.tab-item.active {
  background-color: #007bff;
  color: #fff;
}

.tab-item:hover {
  background-color: #f5f5f5;
}

.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 200px;
  background-color: #eee;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-excerpt {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.card-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.card-meta span {
  margin-right: 10px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f5f5f5;
}

.card-footer-item {
  font-size: 14px;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.card-footer-item:hover {
  text-decoration: underline;
}

.card-footer-icon {
  margin-right: 5px;
}

.comment {
  margin-bottom: 20px;
  display: flex;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  background-color: #eee;
  margin-right: 10px;
}

.comment-content {
  flex: 1;
}

.comment-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.comment-text {
  font-size: 16px;
  margin-bottom: 10px;
}

.comment-reply {
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
}

.comment-reply:hover {
  text-decoration: underline;
}
</style>
