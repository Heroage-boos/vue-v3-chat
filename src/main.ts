//core
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// load
import { loadSvg } from '@/icons'
// import { loadPlugins } from '@/plugins'
// import { loadDirectives } from '@/directives'
import '@/mock'
//css
import '@/styles/index.scss'
import '@/styles/normalize.scss'
import '@/styles/commont.scss'
import '@/styles/util.scss'
import '@/styles/theme.scss'

const app = createApp(App)

/** 加载插件 */
// loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
// loadDirectives(app)

app.use(store).use(router)

//使用 router.isReady() 方法来等待路由加载完成,再将应用程序实例挂载到 DOM 中
router.isReady().then(() => {
  app.mount('#app')
})
