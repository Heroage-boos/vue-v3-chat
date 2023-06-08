<template>
  <div class="app-con">
    <div class="header-nav">
      <nav class="nav" v-if="$router.currentRoute.value.name != 'login'">
        <!-- <router-link to="/">Home</router-link> 
    <router-link to="/chat">About</router-link> -->
        <!-- <router-view to="/" /> -->
        <div class="logo">
          <a href="#"><img src="./assets/主页.svg" alt="Logo"></a>
        </div>
        <div class="menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cloudShop">云小铺</router-link></li>
            <li><router-link to="/hotTop">热榜</router-link></li>
            <li><router-link to="/util">实用工具</router-link></li>
            <li><router-link to="/community">社区</router-link></li>
            <li><span v-on:click="handleChat()">chatGTP</span></li>
            <li><router-link to="/webNav">网址导航</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="con">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from 'vuex'

export default defineComponent({

  data: () => {
    return {

    }
  },
  // created() {

  // },

  methods: {
    handleChat() {
      //判断是否登录 true加载聊天页面 false登录页面
      console.log('this.isLoggedIn', this.isLoggedIn);
      // return 
      // if (this.isLoggedIn) {
      this.$router.push("/chat")
      // } else {
      //   this.$router.push("/login")
      // }
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
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

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: #fff;
  }
}


.con {
  flex: 1;
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
