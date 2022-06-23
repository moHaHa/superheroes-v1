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
          children: []
        },
        {
          path: 'courses',
          component: () => import('./admin/pages/courses'),
          children: []
        },
        {
          path: 'playlists',
          component: () => import('./admin/pages/playlists'),
          children: []
        },
        {
          path: 'rendering',
          component: () => import('./rendering/module-layout.vue'),
          children: [
            {
              path: 'overview',
              component: () => import('./rendering/layouts/overview')
            },
            {
              path: 'app',
              component: () => import('./rendering/layouts/app'),
              children: [
                {
                  path: 'table/:table',
                  component: () => import('./rendering/layouts/table'),
                  children: [
                    {
                      path: 'record/:record',
                      component: () => import('./rendering/layouts/record'),
                      children: [
                        {
                          path: 'new',
                          component: () => import('./rendering/components/new')
                        },
                        {
                          path: 'update',
                          component: () => import('./rendering/components/update')
                        }
                      ]
                    },
                    {
                      path: 'list',
                      component: () => import('./rendering/components/list')
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '',
      component: () => import('./layouts/school-layout/index.vue'),
      redirect: '/home',
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
