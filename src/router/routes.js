import pgCategories from 'pages/Categories'
import pgMenus from 'pages/Menus'
import pgStores from 'pages/Stores'
import pgHome from 'pages/Home'
import pgCustomer from 'pages/Customer'
import loCustomer from 'layouts/Customer'
import pgRegister from 'pages/Register'
import pgLogin from 'pages/Login'
import pgMenuDetail from 'pages/MenuDetail'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: pgHome,
      },
      {
        path: 'categories',
        component: pgCategories,
      },
      {
        path: 'menus/:catId',
        component: pgMenus,
      },
      {
        path: 'stores',
        component: pgStores,
      },
      {
        path: 'customer',
        component: loCustomer,
        children: [
          {
            path: '',
            component: pgCustomer,
          },
          {
            path: 'login',
            component: pgLogin,
          },
          {
            path: 'register',
            component: pgRegister,
          },
        ],
      },
      {
        path: 'menus/:catId',
        component: pgMenus,
      },
      {
        path: 'menudetail/:menuId',
        component: pgMenuDetail,
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
