import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ROUTER_NAMES from './routerNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTER_NAMES.HOME,
      component: HomeView
    },
    {
      path: '/search/:id',
      name: ROUTER_NAMES.SEARCH,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchView.vue'),
      children: [
        {
          path: '',
          name: ROUTER_NAMES.GAME_RESULT,
          props: true,
          component: () => import('../views/GameResult.vue')
        },
        {
          path: 'builds',
          name: ROUTER_NAMES.GAME_BUILD,
          props: true,
          component: () => import('../views/GameBuilds.vue')
        }
      ]
    }
  ]
})

export default router
