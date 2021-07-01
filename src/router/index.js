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
    name: 'Actuality',
    component: () => import(/* webpackChunkName: "about" */ '../views/Actuality.vue')
  },
  {
    path: '/adoption',
    name: 'Adoption',
    component: () => import(/* webpackChunkName: "about" */ '../views/Adoption.vue')
  },
  {
    path: '/lost',
    name: 'LostListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lost/LostListing.vue')
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
