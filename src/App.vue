<template>
  <div class="app-con">
    <div class="header-nav" v-if="$router.currentRoute.value.name !== 'login'">
      <nav class="nav">
        <!-- <router-link to="/">Home</router-link> 
        <router-link to="/chat">About</router-link> -->
        <!-- <router-view to="/" /> -->
        <div class="logo">
          <a href="#"><img src="./assets/主页.svg" alt="Logo" /></a>
        </div>
        <div class="menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cloudShop">云小铺</router-link></li>
            <li><router-link to="/hotTop">热榜</router-link></li>
            <li><router-link to="/community">社区</router-link></li>
            <li><span @click="handleChat()">chatGTP</span></li>
            <li><router-link to="/webNav">网址导航</router-link></li>
          </ul>
        </div>
        <div class="other">
          <div class="theme">
            <span @mouseenter="isThemeTab = true" @mouseleave="isThemeTab = false">主题切换</span>
            <div @mouseenter="isThemeTab = true" @mouseleave="isThemeTab = false" class="tab-theme-con"
              v-show="isThemeTab">
              <div class="hw10 bg-color-007bff " @click="handleTabTheme('light')"></div>
              <div class="hw10 bg-color-ff0000 " @click="handleTabTheme('dark')"></div>
              <div class="hw10 bg-color-f4e2a6 " @click="handleTabTheme('dark-orange')"></div>
            </div>
          </div>
          <div><router-link to="/login">登录</router-link></div>
        </div>
      </nav>
    </div>
    <div :class="{
      con: $router.currentRoute.value.name !== 'login',
      flex: true
    }">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  data: () => {
    return {
      isThemeTab: false
    }
  },
  // created() {

  // },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    handleChat() {
      // 判断是否登录 true加载聊天页面 false登录页面
      console.log('this.isLoggedIn', this.isLoggedIn)
      // return
      // if (this.isLoggedIn) {
      this.$router.push('/chat')
      // } else {
      //   this.$router.push("/login")
      // }
    },
    handleTabTheme(t: string) {
      const root = document.documentElement
      const currentTheme = root.getAttribute('data-theme')
      const newTheme = t
      root.setAttribute('data-theme', newTheme)
      switch (newTheme) {
        case 'light':
          root.style.setProperty('--primary-color', '#007bff')
          root.style.setProperty('--secondary-color', '#6c757d')
          root.style.setProperty('--text-color', '#212529')
          root.style.setProperty('--background-color', '#f8f9fa')
          break;
        case 'dark':
          root.style.setProperty('--primary-color', '#ff0000')
          root.style.setProperty('--secondary-color', '#00ff00')
          root.style.setProperty('--text-color', '#0000ff')
          root.style.setProperty('--background-color', '#000000')
          break;
        case 'dark-orange':
          root.style.setProperty('--primary-color', '#f4e2a6')
          root.style.setProperty('--secondary-color', '#7f9121')
          root.style.setProperty('--text-color', '#7f9121')
          root.style.setProperty('--background-color', '#61aae0')
          break;
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.app-con {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #2c3e50;
}

.header-nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: var(--background-color);
  color: var(--text-color);

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    // background-color: #fff;
  }

  .other {
    display: flex;
    color: #333;
    font-weight: bold;

    >div:first-child {
      margin-right: 10px;
    }

    .theme {
      position: relative;

    }

    .tab-theme-con {
      position: absolute;
      top: 16px;
      left: -9px;
      border: solid 1px red;
      display: flex;
      padding: 10px;

      >div {
        margin-right: 10px;
        cursor: pointer;
      }

      .hw10 {
        height: 10px;
        width: 10px;
      }

      .bg-color-007bff {
        background-color: #007bff;
      }

      .bg-color-ff0000 {
        background-color: #ff0000;
      }

      .bg-color-f4e2a6 {
        background-color: #f4e2a6;
      }
    }
  }
}

.con {
  margin-top: 64.39px;
}

.logo img {
  height: 50px;
}

.menu {
  flex-direction: column;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.menu li {
  margin: 0 10px;
  color: #333;
  font-weight: bold;
}

.menu {
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  span {
    cursor: pointer;
  }
}
</style>
