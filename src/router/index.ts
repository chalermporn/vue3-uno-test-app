import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/MeView.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('../views/AlertView.vue')

    },
    {
      path: '/handsontable',
      name: 'handsontable',
      component: () => import('../views/HandsontableView.vue')
    },
    {
      path: '/mone',
      name: 'mone',
      component: () => import('../views/MOneView.vue')
    },
    {
      path: '/mtwo',
      name: 'mtwo',
      component: () => import('../views/MTwoView.vue')
    },
    {
      path: '/mtwo/:data',
      name: 'mtwo2',
      meta: {
        test: "other config"
      },
      component: () => import('../views/MTwoView.vue')
    }
  ]
})

export default router
