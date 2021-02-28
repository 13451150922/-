import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant'

// 加载全局样式
import 'vant/lib/index.css'

// 加载动态设置 REM 基准值
import 'amfe-flexible'

// 加载 dayjs 初始配置
import './utils/dayjs'

// 注册使用vant组件库
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
