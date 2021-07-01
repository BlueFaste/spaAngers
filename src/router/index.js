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
	{
		path: '/actuality/:id',
		name: 'Actuality',
		component: () => import(/* webpackChunkName: "about" */ '../views/Actuality/Article.vue')
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
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


router.beforeEach((to, from, next) => {
	store.dispatch('updateRouterName', to.name)
	window.scroll(0, 0)
	next();
})

export default router
