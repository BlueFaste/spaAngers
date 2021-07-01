<template>
	<nav class="nav">
		<header class="nav--header">
			<router-link to="/" class="nav--header-logo">
				<img src="https://www.la-spa.fr/sites/all/themes/bluemasters/logo.svg" alt="">
			</router-link>
			<div @click="close()">
				<img :src="require('@/assets/close-burger-menu.svg')" alt="">
			</div>
		</header>
		<ul class="nav--list">
			<li @click="close()">
				<router-link to="/">
					Accueil
				</router-link>
			</li>
			<li @click="close()">
				<router-link to="/">
					Nos combats
				</router-link>
			</li>
			<li>
				<span @click="toggleSubMenuAnimal()">Les animaux <img :src="require('@/assets/chevron-nav.svg')"
						alt="" class="nav--list--icon" id="icon-animal"></span>
				<ul class=" nav--list--subMenu" v-show="subMenuAnimal">
					<li @click="close()">
						<router-link to="/animals/adoption">
							à adopter
						</router-link>
					</li>
					<li @click="close()">
						<router-link to="/animals/lost">
							perdus
						</router-link>
					</li>
					<li @click="close()">
						<router-link to="/animals/find">
							trouvés
						</router-link>
					</li>
				</ul>
			</li>
			<li @click="close()">
				<router-link to="/">
					Donations
				</router-link>
			</li>
			<li @click="close()">
				<router-link to="/">
					Abandons
				</router-link>
			</li>
			<li>
				<span @click="toggleSubMenuBlog()">Blog <img :src="require('@/assets/chevron-nav.svg')" alt=""
						class="nav--list--icon" id="icon-blog"></span>
				<ul class="nav--list--subMenu nav--list--subMenu--blog" v-show="subMenuBlog">
					<li @click="close()">
						<router-link to="/animals/adoption">
							à adopter
						</router-link>
					</li>
					<li @click="close()">
						<router-link to="/animals/lost">
							perdus
						</router-link>
					</li>
					<li @click="close()">
						<router-link to="/animals/find">
							trouvés
						</router-link>
					</li>
				</ul>
			</li>
			<li @click="close()">
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
	name: "navigation",
	data() {
		return {
			subMenuAnimal: false,
			subMenuBlog: false,
		}
	},
	methods: {
		toggleSubMenuAnimal() {
			this.subMenuAnimal = !this.subMenuAnimal;
			const icon = document.getElementById('icon-animal')
			if(this.subMenuAnimal) {
				icon.classList.add('nav--list--icon--open')
			} else {
				icon.classList.remove('nav--list--icon--open')
			}
		},
		toggleSubMenuBlog() {
			this.subMenuBlog = !this.subMenuBlog;
			const icon = document.getElementById('icon-blog')
			if(this.subMenuAnimal) {
				icon.classList.add('nav--list--icon--open')
			} else {
				icon.classList.remove('nav--list--icon--open')
			}
		},

		close(){
			this.subMenuAnimal = false;
			this.subMenuBlog = false;
			this.$emit('close');
		}
	}
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
			margin: calc-rem(0) 0;

		}

		&--subMenu {
			font-size: calc-rem(18);
			list-style: none;
			text-align: right;
			width: 50vw;

			&--blog {
				width: 50vw;
			}
		}

		&--icon {
			&--open {
				transform: rotate(180deg);
			}
		}
	}

	&--img {
		width: 60vw;
		position: absolute;
		bottom: 0;
		right: 0;
		object-fit: contain;
		z-index: -1;
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
