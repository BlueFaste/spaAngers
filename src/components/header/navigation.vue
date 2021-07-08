<template>
	<nav class="nav">
		<header class="nav--header">
			<router-link @click.native="close()" to="/" class="nav--header-logo">
				<img :src="require('@/assets/logo-spaa.svg')" alt="">
			</router-link>
			<div @click="close()">
				<img :src="require('@/assets/close-burger-menu.svg')" alt="">
			</div>
		</header>
		<ul class="nav--list">
		<li>
				<router-link @click.native="close()" to="/">
					Accueil
				</router-link>
			</li>
		<li>
				<router-link @click.native="close()" to="/fights">
					Nos combats
				</router-link>
			</li>
			<li>
				<span @click="toggleSubMenuAnimal()">Les animaux <img :src="require('@/assets/chevron-nav.svg')"
						alt="" class="nav--list--icon" id="icon-animal"></span>
				<ul class=" nav--list--subMenu nav--list--subMenu--animal close" id="subMenu-animal">
				<li>
						<router-link @click.native="close()" to="/animals/adoption">
							à adopter
						</router-link>
					</li>
				<li>
						<router-link @click.native="close()" to="/animals/lost">
							perdus
						</router-link>
					</li>
				<li>
						<router-link @click.native="close()" to="/animals/find">
							trouvés
						</router-link>
					</li>
				</ul>
			</li>
		<li>
				<router-link @click.native="close()" to="/donation">
					Donations
				</router-link>
			</li>
		<li>
				<router-link @click.native="close()" to="/abandon">
					Abandons
				</router-link>
			</li>
			<li>
				<span @click="toggleSubMenuBlog()">Blog <img :src="require('@/assets/chevron-nav.svg')" alt=""
						class="nav--list--icon" id="icon-blog"></span>
				<ul class="nav--list--subMenu nav--list--subMenu--blog close" id="subMenu-blog">
				<li>
						<router-link @click.native="close()" to="/actuality">
							Actualités
						</router-link>
					</li>
				<li>
						<router-link @click.native="close()" to="/">
							Infos véto
						</router-link>
					</li>
				<li>
						<router-link @click.native="close()" to="/faq">
							FAQ
						</router-link>
					</li>
				</ul>
			</li>
		<li>
				<router-link @click.native="close()" to="/contact">
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
			const icon = document.getElementById('icon-animal');
			let subMenu = document.getElementById('subMenu-animal')
			let subMenuBlog = document.getElementById('subMenu-blog')
			if(this.subMenuAnimal) {
				icon.classList.add('nav--list--icon--open');
				subMenu.classList.remove('close')

				// close the other subMenu if it is open
				const iconBlog = document. getElementById('icon-blog');
				this.subMenuBlog = false;
				subMenuBlog.classList.add('close')
				iconBlog.classList.remove('nav--list--icon--open');
			} else {
				icon.classList.remove('nav--list--icon--open');
				subMenu.classList.add('close')
			}
		},
		toggleSubMenuBlog() {
			this.subMenuBlog = !this.subMenuBlog;
			const icon = document.getElementById('icon-blog');
			let subMenu = document.getElementById('subMenu-blog')
			let subMenuAnimal = document.getElementById('subMenu-animal')
			if(this.subMenuBlog) {
				icon.classList.add('nav--list--icon--open');
				subMenu.classList.remove('close')
				// close the other subMenu if it is open
				const iconAnimal = document.getElementById('icon-animal');
				this.subMenuAnimal = false;
				subMenuAnimal.classList.add('close')
				iconAnimal.classList.remove('nav--list--icon--open');
			} else {
				icon.classList.remove('nav--list--icon--open');
				subMenu.classList.add('close')
			}
		},

		close() {
			this.subMenuAnimal = false;
			this.subMenuBlog = false;
			const animalIcon = document.getElementById('icon-animal')
			const blogIcon = document.getElementById('icon-blog')
			let subMenuAnimal = document.getElementById('subMenu-animal')
			let subMenuBlog = document.getElementById('subMenu-blog')
			subMenuAnimal.classList.add('close')
			subMenuBlog.classList.add('close')

			animalIcon.classList.remove('nav--list--icon--open')
			blogIcon.classList.remove('nav--list--icon--open')
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
		list-style: none;
		color: $primary-orange;
		text-shadow: white 1px 1px, white -1px 1px, white -1px -1px, white 1px -1px;
		font-size: calc-rem(20);
		font-weight: bold;

		li {
			margin: calc-rem(5) 0;
		}

		&--subMenu {
			font-size: calc-rem(18);
			list-style: none;
			padding-left: calc-rem(20);
			max-height: 100px;
			max-width: 100%;
			opacity: 1;
			transition: max-height 0.2s, opacity 0.8s, max-width 0s;

			a{
				display: block;
				max-width: 100%;
				transition: max-width 0s;
			}
		}
		.close {
			max-height: 0;
			max-width: 0;
			opacity: 0;
			transition: max-height 0.4s, opacity 0.15s, max-width 2s;
			z-index: -1;

			a{
				display: block;
				max-width: 0;
				transition: max-width 2s;
				pointer-events: none;
			}
		}

		&--icon {
			transform: rotate(0deg);
			transition: transform 0.4s;
			&--open {
				transform: rotate(-180deg);
				transition: transform 0.4s;
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
