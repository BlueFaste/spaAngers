import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actuality',
    name: 'ActualityListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Actuality/ActualityListing.vue'),
  },
    name: 'Actuality',
    component: () => import(/* webpackChunkName: "about" */ '../views/Actuality.vue')
  },
  {
    path: '/animals/adoption',
    name: 'Adoption',
    component: () => import(/* webpackChunkName: "about" */ '../views/Adoption.vue')
  },
  {
    path: '/animals/lost',
    name: 'LostListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lost/LostListing.vue')
  },
  {
    path: '/animals/find',
    name: 'FindListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Find/FindListing.vue')
  },




  {
    path: '*',
    component: () => import(/* webpackChunkName: "error" */'../views/Error/404.vue')
  },
  {
    path: '/500',
    component: () => import(/* webpackChunkName: "error" */'../views/Error/500.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  store.dispatch('updateRouterName', to.name)
  next();
})

export default router
