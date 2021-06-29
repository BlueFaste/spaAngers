<template>
	<header class="header">
		<router-link to="/" class="header--logo">
			<img src="https://www.la-spa.fr/sites/all/themes/bluemasters/logo.svg" alt="">
		</router-link>
		<div class="header--burger">
			<img :src="require('@/assets/burger-menu.svg')" alt="" @click="toggleNav">
			<navigation class="header--nav" id="nav" @close="toggleNav"></navigation>
		</div>
	</header>
</template>

<script>
import Navigation from "./navigation";

export default {
	name: "header",
	components: {Navigation},
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
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.header {
	background: $primary-beige;
	padding: calc-rem(32);
	display: flex;
	justify-content: space-between;
	align-items: center;

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

}

</style>
