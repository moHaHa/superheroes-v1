export default {
  path: '',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'admin',
      component: () => import('./layouts/admin-layout'),
      children: [
        {
          path: 'articles',
          component: () => import('./admin/pages/articles'),
          children: [
            
          ]
        },  
      ]
    },
    {
      path: 'school',
      component: () => import('./layouts/school-layout/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('./school/pages/home')
        },
        {
          path: 'courses',
          component: () => import('./school/pages/courses')
        },
        {
          path: 'library',
          component: () => import('./school/pages/library')
        },
        {
          path: 'login',
          component: () => import('./school/pages/login')
        },
        {
          path: 'new-register',
          component: () => import('./school/pages/new-register')
        }
      ]
    }
  ]
}
