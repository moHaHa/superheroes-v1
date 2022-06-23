import Vue from 'vue'
import Router from 'vue-router'
import svuRouter from '../project/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('../project/layouts/start-layout'),
      children: [svuRouter]
    },
  ]
})

export default router
