export default {
  path: '',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'admin',
      component: () => import('./layouts/admin'),
      children: []
    },
    {
      path: 'school',
      component: () => import('./layouts/school/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('./school/pages/home')
        },
        {
          path: 'courses',
          component: () => import('./school/pages/courses')
        }
      ]
    }
  ]
}
