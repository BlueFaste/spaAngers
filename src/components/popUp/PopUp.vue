<template>
	<section class="popUp" @click="$emit('close')">
		<div class="popUp--container popUp--container--tictac-rigth">
			<h2>Merci !</h2>
			<p v-for="(text, key) in textArray" :key="key"> {{ text }} </p>
			<router-link to="/">
				<Button color="orange" text="Retour à l'accueil" tic-tac="left"></Button>
			</router-link>

			<div class="popUp--background">
				<img :src="require('@/assets/goldenRetriever-nav.png')" alt="" class="popUp--background-dog">
				<img :src="require('@/assets/pawprint.svg')" alt="" class="popUp--background-paw popUp--background-paw-1">
				<img :src="require('@/assets/pawprint.svg')" alt="" class="popUp--background-paw popUp--background-paw-2">
			</div>
		</div>

	</section>
</template>

<script>
import Button from "../button/button";
export default {
	name: "PopUp",
	components: {Button},
	props:{
		textArray: Array,
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.popUp{
	width: 100vw;
	height: 100vh;
	background-color: $primary-brown-rgba;
	//opacity: .15;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;

	&--container{
		width: 70vw;
		height: 70vh;
		background-color: white;
		position: relative;
		opacity: 1;
		padding: calc-rem($margin-top) calc-rem($margin-border - 10) calc-rem($margin-bottom) calc-rem($margin-border - 10);

		@include button-tictac;

		h2{
			text-transform: initial !important;
			font-size: calc-rem(24) !important;
			margin-bottom: calc-rem(10) !important;
		}
		z-index: 1;
	}

	&--background{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;

		&-dog{
			position: absolute;
			width: 40vw;
			right: 0;
			bottom: 0;
			border-radius: 0  0 20px 0;
		}
			&-paw {
				width: 25vw;
				position: absolute;

				&-1 {
					transform: scale(0.5);
					top: 2vh;
					right: 2vw;
				}

				&-2 {
					transform: rotate(70deg) scale(0.9);
					left: 2vw;
					bottom: 20vh;

				}
			}
		}
}

</style>
