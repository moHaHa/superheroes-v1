export default {
  path: 'branch',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'task',
      name: 'task',
      component: () => import('./pages/task')
    }
  ]
}
