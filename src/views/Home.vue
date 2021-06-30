<template>
	<div class="home">
		<div class="home--call-action">
			<div class="home--call-action--background ">
				<img :src="require('@/assets/pawprint.svg')" alt="" class="home--call-action--background-paw home--call-action--background-paw-1">
				<img :src="require('@/assets/pawprint.svg')" alt="" class="home--call-action--background-paw home--call-action--background-paw-2">
				<img :src="require('@/assets/pawprint.svg')" alt="" class="home--call-action--background-paw home--call-action--background-paw-3">
			</div>
			<div class="home--call-action--background ">
				<img :src="require('@/assets/bubble.svg')" alt="" class="home--call-action--background-bubble home--call-action--background-bubble-1">
				<img :src="require('@/assets/bubble.svg')" alt="" class="home--call-action--background-bubble home--call-action--background-bubble-2">
				<img :src="require('@/assets/bubble.svg')" alt="" class="home--call-action--background-bubble home--call-action--background-bubble-3">
			</div>
			<div class="home--call-action--donation">
				<img :src="require('@/assets/dog-orange-circle.svg')" alt="">
				<p>Comme chaque année, le combat contre l'abandon des animaux continue.
					Aidez la SPAA Angers.</p>
				<router-link to="/">
					<Button text="Faire un don" ticTac="rigth" color="orange"></Button>
				</router-link>
				<router-link to="/">
					<Button text="Adopter" ticTac="rigth" color="brown"></Button>
				</router-link>

			</div>
		</div>
		<div class="home--refuge">
			<box background="beige" tic-tac="rigth" size="50">
				<template v-slot:content>
					<h1>Le refuge</h1>
					<p>Découvrez notre refuge en cliquant ci-dessous</p>
				</template>
			</box>
			<router-link to="/" class="home--refuge--discover">
				<Button text="Découvrir" ticTac="left" color="orange"></Button>
			</router-link>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import Button from "../components/button/button";
import Box from "../components/box/box";
export default {
	name: 'Home',
	components: {
		Box,
		Button
	}
}
</script>

<style lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";
.home {

	&--call-action{
		height: 85vh;

		&--donation{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			p{
				margin: calc-rem(20) calc-rem(50);
				text-align: center;
			}

			button{
				width: 50vw;
			}
		}

		&--background{
			position: absolute;
			height: 90vh;
			width: 100vw;
			overflow-x: hidden;

			&-paw, &-bubble{
				position: absolute;

			}

			&-paw{
				&-1{
					transform: scale(0.8);
					left: 60vw;
					top: -5vw
				}

				&-2{
					transform: scale(1.5) rotate(40deg);
					left: -20vw;
					bottom: 20vh;
				}

				&-3{
					transform: scale(0.5);
					bottom: 2vh;
					left: 60vw;
				}
			}

			&-bubble{
				&-1{
					transform: scale(1.2);
					top: 8vh;
					left: -6vw;
				}

				&-2{
					left: 90vw;
					top: 15vh;
				}

				&-3{
					transform: scale(0.5);
					left: 5vw;
					top: 30vh;
				}
			}
		}

	}

	&--refuge{
		background-image: url("../assets/refuge-vague.svg");
		background-repeat: no-repeat;
		background-size: cover;
		width: 100vw;
		height: 70vh;
		padding: calc-rem(60) calc-rem(10);
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&--discover{
			align-self: flex-end !important;
			.btn{
				backdrop-filter: blur( 14.0px );
				-webkit-backdrop-filter: blur( 14.0px );
				background: $primary-orange-rgba !important;
			}
		}
	}
}
</style>
