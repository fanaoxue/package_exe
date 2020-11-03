import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello_world',
    component: require('@/views/HelloWorld').default
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/start_page',
    name: 'start_page',
    component: require('@/views/StartPage').default
  },
  {
    path: '/home_page',
    name: 'home_page',
    component: require('@/views/HomePage').default
  },
  {
    path: '/login',
    name: 'login',
    component: require('@/views/Login').default
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   } else if (process.env.VUE_APP_ENV === 'development') {
//     document.title = '认证识别、绑卡'
//   }
//   Vue.prototype.$toast.clear()
//   next()
// })

// router.afterEach((to, from, next) => {
//   if (process.env.VUE_APP_ENV !== 'production') {
//     setTimeout(() => {
//       console.log('路由url打印：', location.href)
//     }, 500)
//   }
// })

export default router
