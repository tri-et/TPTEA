import pgOrder from 'pages/order'
import pgStore from 'pages/store'
import pgMember from 'pages/member'
import pgIndex from 'pages/Index'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: pgIndex,
      },
      {
        path: 'orders',
        component: pgOrder,
      },
      {
        path: 'stores',
        component: pgStore,
      },
      {
        path: 'members',
        component: pgMember,
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
