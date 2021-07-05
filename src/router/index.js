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
		path: '/refuge',
		name: 'Refuge',
		component: () => import(/* webpackChunkName: "about" */ '../views/Refuge/Refuge.vue'),
	},
	{
		path: '/volunteer',
		name: 'Volunteer',
		component: () => import(/* webpackChunkName: "about" */ '../views/Volunteer/BecomeVolunteer.vue'),
	},
	{
		path: '/abandon',
		name: 'Abandon',
		component: () => import(/* webpackChunkName: "about" */ '../views/Abandon/Abandon.vue'),
	},
	{
		path: '/donation',
		name: 'Donation',
		component: () => import(/* webpackChunkName: "about" */ '../views/Donation/donation.vue'),
	},
	{
		path: '/fights',
		name: 'Fights',
		component: () => import(/* webpackChunkName: "about" */ '../views/Fights/Fights.vue'),
	},
	{
		path: '/faq',
		name: 'FAQ',
		component: () => import(/* webpackChunkName: "about" */ '../views/Fights/Fights.vue'),
	},

	{
		path: '/actuality',
		name: 'ActualityListing',
		component: () => import(/* webpackChunkName: "ActualityListing" */ '../views/Actuality/ActualityListing.vue'),
	},
	{
		path: '/actuality/:id',
		name: 'Article',
		component: () => import(/* webpackChunkName: "Article" */ '../views/Actuality/Article.vue')
	},
	{
		path: '/animals/adoption',
		name: 'Adoption',
		component: () => import(/* webpackChunkName: "Adoption" */ '../views/Adoption/AdoptionListing.vue')
	},
	{
		path: '/animals/adoption/:id',
		name: 'animalProfil',
		component: () => import(/* webpackChunkName: "Adoption" */ '../views/Adoption/animalProfil.vue')
	},
	{
		path: '/animals/lost',
		name: 'LostListing',
		component: () => import(/* webpackChunkName: "LostListing" */ '../views/Lost/LostListing.vue')
	},
	{
		path: '/animals/lost/:id',
		name: 'LostProfil',
		component: () => import(/* webpackChunkName: "LostListing" */ '../views/Lost/LostProfil.vue')
	},
	{
		path: '/animals/form/lost',
		name: 'LostForm',
		component: () => import(/* webpackChunkName: "LostListing" */ '../views/Lost/LostForm.vue')
	},
	{
		path: '/animals/find',
		name: 'FindListing',
		component: () => import(/* webpackChunkName: "FindListing" */ '../views/Find/FindListing.vue')
	},
	{
		path: '/animals/find/:id',
		name: 'FindProfil',
		component: () => import(/* webpackChunkName: "FindListing" */ '../views/Find/FindProfil.vue')
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
	console.log('ee')
	store.dispatch('updateRouterName', to.name)
	window.scroll(0, 0)
	next();
})

export default router
