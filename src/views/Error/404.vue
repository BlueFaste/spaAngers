<template>
	<main class="error">
		<section class="error--text">
			<h2>Oups...</h2>
			<p>Cette page n'est pas disponible...</p>
			<p>Erreur <span class="error--text--chiffre">404</span>...</p>
			<Button text="Retour à l'accueil" ticTac="rigth" color="orange"></Button>
		</section>

		<img class="error--img" :src="require('@/assets/goldenRetriever-nav.png')" alt="">

		<div class="error--background">
			<img :src="require('@/assets/pawprint.svg')" alt="" class="error--background-paw error--background-paw-1">
			<img :src="require('@/assets/pawprint.svg')" alt="" class="error--background-paw error--background-paw-2">
		</div>
	</main>
</template>

<script>
import Button from "../../components/button/button";

export default {
	name: "404",
	components: {Button}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.error {
	padding: calc-rem(70) calc-rem($margin-border) calc-rem(10) calc-rem($margin-border);
	font-weight: bold;
	height: 80vh;
	position: relative;

	&--text {
		width: 50vw;

		&--chiffre {
			color: $primary-orange;
		}

		p, h2 {
			margin-bottom: calc-rem(5) !important;
			color: $primary-brown;
		}

		.button {
			width: max-content;
		}
	}


	.button {
		margin: 0;
	}

	&--img {
		width: 60vw;
		position: absolute;
		bottom: -7vh;
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
				top: 5vh;
				right: -3vw;
			}

			&-2 {
				transform: scale(2) rotate(40deg);
				left: -13vw;
				bottom: 30vh;

			}
		}
	}
}

</style>
