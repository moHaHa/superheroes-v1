import Vue from 'vue'
import Router from 'vue-router'
import ProjectRouter from '@/modules/project/router'
import DashboardRouter from '@/modules/dashboard/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('../layout/start/main.vue'),
      children: [...DashboardRouter]
    },

    {
      path: '/project',
      component: () => import('../layout/project/main.vue'),
      children: [...ProjectRouter]
    },

    {
      path: '/page-not-found',
      component: () => import('../views/not-found.vue')
    },
    {
      path: '*',
      redirect: '/page-not-found'
    }
  ]
})

export default router
