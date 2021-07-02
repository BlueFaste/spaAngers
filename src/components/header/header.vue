<template>
	<header class="header">
		<router-link to="/" class="header--logo">
			<img src="https://www.la-spa.fr/sites/all/themes/bluemasters/logo.svg" alt="">
		</router-link>
		<div class="header--burger">
			<img :src="require('@/assets/burger-menu.svg')" alt="" @click="toggleNav">
			<navigation class="header--nav" id="nav" @close="toggleNav"></navigation>
		</div>
		<div class="header--design" id="header-design">
			<img :src="require('@/assets/header-vague.svg')" alt="">
		</div>
	</header>
</template>

<script>
import Navigation from "./navigation";

export default {
	name: "header",
	components: {Navigation},
	data() {
		return {
			routerName: this.$store.getters.getRouterName
		}
	},
	methods: {
		toggleNav() {
			console.log('hello')
			const nav = document.getElementById('nav')
			console.log((nav.classList.value.includes('-open')))
			if(nav.classList.value.includes('-open')) {
				nav.classList.remove('header--nav-open')
			} else {
				nav.classList.add('header--nav-open')

			}
		}
	},
	// watch: {
	// 	routerName : function(){
	// 		console.log('header', this.routerName )
	// 		if (this.routerName.name === 'Home'){
	// 			const design = document.getElementById('header-design')
	// 			design.classList.add('header--design--none')
	// 		}
	// 	}
	// }
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.header {
	background: $primary-beige;
	padding: calc-rem(32) calc-rem(30) 0 calc-rem(30);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 999;

	&--logo {
		display: block;
		width: 35vw;
	}

	&--burger {
		cursor: pointer;
	}

	&--nav {
		left: -100vw;
		transition: left 200ms;


		&-open {
			left: 0;
			transition: left 200ms;
		}
	}

	&--design {
		position: absolute;
		bottom: -5vh;
		left: -1vw;
		z-index: -1;
		width: 101vw;
		overflow: hidden;

		img {
			width: 103vw;

		}

		&--none {
			visibility: hidden;
		}
	}

}

</style>
