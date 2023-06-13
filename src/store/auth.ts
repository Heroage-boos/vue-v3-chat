// auth.js
export default {
  state: {
    isLoggedIn: false
  },
  mutations: {
    login(state: { isLoggedIn: boolean }) {
      console.log('login')
      state.isLoggedIn = true
    },
    logout(state: { isLoggedIn: boolean }) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login({ commit }: any) {
      // 在此处执行登录操作，然后调用 mutations 中的 login 方法更新状态
      commit('login')
    },
    logout({ commit }: any) {
      // 在此处执行登出操作，然后调用 mutations 中的 logout 方法更新状态
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: (state: { isLoggedIn: any }) => state.isLoggedIn
  }
}
