import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('../views/MeView.vue'),
        },
        {
          path: 'api',
          name: 'api',
          component: () => import('../views/ApiView.vue'),
        },
        {
          path: 'alert',
          name: 'alert',
          component: () => import('../views/AlertView.vue'),

        },
        {
          path: 'handsontable',
          name: 'handsontable',
          component: () => import('../views/HandsontableView.vue'),
        },
        {
          path: 'mone',
          name: 'mone',
          component: () => import('../views/MOneView.vue'),
        },
        {
          path: 'mtwo',
          name: 'mtwo',
          component: () => import('../views/MTwoView.vue'),
        },
        {
          path: 'mtwo/:data',
          name: 'mtwo2',
          meta: {
            test: "other config",
          },
          component: () => import('../views/MTwoView.vue'),
        },
      ]
    },
    {
      path: '/demo',
      component: () => import('../layouts/LandingLayout.vue'),
      children: [
        {
          path: 'land-page',
          name: 'landPage',
          component: () => import('../views/landing/LandingPageView.vue'),
          meta: { transition: 'slide-left' },
        }
      ]
    }
  ]
})

export default router
