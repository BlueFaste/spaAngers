<template>
	<nav class="nav">
		<header class="nav--header">
			<router-link to="/" class="nav--header-logo">
				<img src="https://www.la-spa.fr/sites/all/themes/bluemasters/logo.svg" alt="">
			</router-link>
			<div @click="$emit('close')">
				<img :src="require('@/assets/close-burger-menu.svg')" alt="">
			</div>
		</header>
		<ul class="nav--list">
			<li>
				<router-link to="/">
					Accueil
				</router-link>
			</li>
			<li>
				<router-link to="/">
					Donation
				</router-link>
			</li>
			<li>
				<router-link to="/">
					Adopter
				</router-link>
			</li>
			<li>
				<router-link to="/">
					Contact
				</router-link>
			</li>
		</ul>

		<img class="nav--img" :src="require('@/assets/goldenRetriever-nav.png')" alt="">

		<div class="nav--background">
			<img :src="require('@/assets/pawprint.svg')" alt="" class="nav--background-paw nav--background-paw-1">
			<img :src="require('@/assets/pawprint.svg')" alt="" class="nav--background-paw nav--background-paw-2">
		</div>

	</nav>
</template>

<script>
export default {
	name: "navigation"
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.nav {
	position: fixed;
	//position: absolute;
	/*left: 0;*/
	top: 0;
	width: 100vw;
	height: 100vh;
	background: white;
	display: block;
	z-index: 999;

	&--header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&-logo {
			display: block;
			width: 35vw;
		}
	}


	&--list {
		margin-top: calc-rem(45);
		padding: 0;
		font-weight: bold;
		list-style: none;
		color: $primary-orange;
		font-size: calc-rem(25);

		li {
			margin: calc-rem(15) 0;
		}
	}

	&--img {
		width: 60vw;
		position: absolute;
		bottom: 0;
		right: 0;
		object-fit: contain;
	}

	&--background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;

		&-paw {
			width: 25vw;
			position: absolute;

			&-1 {
				top: 18vh;
				right: 20vw;
			}

			&-2 {
				transform: scale(2) rotate(40deg);
				left: -13vw;
				bottom: 20vh;

			}
		}
	}
}

</style>
