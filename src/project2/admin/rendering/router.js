export default [
  {
    path: '',
    component: () => import('./module-layout.vue'),
    children: [
      {
        path: 'overview',
        component: () => import('./layouts/overview')
      },
      {
        path: 'app',
        name: 'app',
        component: () => import('./layouts/app'),
        children: [
          {
            path: 'table/:table',
            component: () => import('./layouts/table'),
            children: [
              {
                path: 'record/:record',
                component: () => import('./layouts/record'),
                children: [
                  {
                    path: 'new',
                    component: () => import('./components/new')
                  },
                  {
                    path: 'update',
                    component: () => import('./components/update')
                  }
                ]
              },
              {
                path: 'list',
                component: () => import('./components/list')
              }
            ]
          }
        ]
      }
    ]
  }
]
