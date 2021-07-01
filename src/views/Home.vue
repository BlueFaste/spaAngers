<template>
	<div class="home">
		<div class="home--call-action">
			<div class="home--call-action--donation">
				<img :src="require('@/assets/dog-orange-circle.webp')" alt="">
				<p>Comme chaque année, le combat contre l'abandon des animaux continue.
					Aidez la SPAA Angers.</p>
				<router-link to="/">
					<Button text="Faire un don" ticTac="rigth" color="orange"></Button>
				</router-link>
				<router-link to="/animals/adoption">
					<Button text="Adopter" ticTac="rigth" color="brown"></Button>
				</router-link>

			</div>
			<div class="home--call-action--background ">
				<img :src="require('@/assets/pawprint.svg')" alt=""
						class="home--call-action--background-paw home--call-action--background-paw-1">
				<img :src="require('@/assets/pawprint.svg')" alt=""
						class="home--call-action--background-paw home--call-action--background-paw-2">
				<img :src="require('@/assets/pawprint.svg')" alt=""
						class="home--call-action--background-paw home--call-action--background-paw-3">
			</div>
			<div class="home--call-action--background ">
				<img :src="require('@/assets/bubble.svg')" alt=""
						class="home--call-action--background-bubble home--call-action--background-bubble-1">
				<img :src="require('@/assets/bubble.svg')" alt=""
						class="home--call-action--background-bubble home--call-action--background-bubble-2">
				<img :src="require('@/assets/bubble.svg')" alt=""
						class="home--call-action--background-bubble home--call-action--background-bubble-3">
			</div>
		</div>
		<div class="home--refuge">
			<box background="beige" tic-tac="rigth" size="50">
				<template v-slot:content>
					<h2>Le refuge</h2>
					<p>Découvrez notre refuge en cliquant ci-dessous</p>
				</template>
			</box>
			<router-link to="/" class="home--refuge--discover">
				<Button text="Découvrir" ticTac="left" color="orange"></Button>
			</router-link>
		</div>
		<div class="home--actu">
			<div class="home--actu--header">
				<h2> Les dernières actualités</h2>
				<router-link to="/actuality" class="home--refuge--discover">
					<Button text="Tout voir" ticTac="left" color="orange"></Button>
				</router-link>
			</div>

			<div class="home--actu--slider">
				<box-img v-for="(actu, key) in actuList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
						:link="actu.link" :key="key" tictac="left"></box-img>
			</div>
		</div>

		<Newsletter></Newsletter>

		<div class="home--help">
			<h2>Comment nous aider ?</h2>
			<div class="home--help-container">
				<box-img-text v-for="(help, key) in helpList" :key="key" :text="help.text" :link="help.link"
						:tictac="help.tictac" :btn-text="help.btnText" :btn-tictac="help.btnTictac"
						:btn-color="help.btnColor"></box-img-text>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import Button from "../components/button/button";
import Box from "../components/box/box";
import BoxImg from "../components/box/boxImg";
import BoxImgText from "../components/box/boxImgText";
import Newsletter from "../components/newsletter/Newsletter";

export default {
	name: 'Home',
	components: {
		Newsletter,
		BoxImgText,
		BoxImg,
		Box,
		Button
	},
	data() {
		return {
			actuList: [
				{
					name: `Les actualités du mois de juin 2021`,
					link: '/',
					img: '',
				},
				{
					name: 'Comment toiletter son chien',
					link: '/',
					img: '',
				},
				{
					name: 'Stériliser son animal',
					link: '/',
					img: '',
				},
			],
			helpList: [
				{
					text: 'Vous souhaitez nous aider en nous accordant du temps et en partageant votre passion et votre savoir-faire ? Alors rejoignez les 4 000 bénévoles de la SPA !',
					link: '/',
					tictac: 'rigth',
					btnText: 'Je deviens bénévole',
					btnTictac: 'rigth',
					btnColor: 'orange',
					image: '',
				},
				{
					text: 'Venez découvrir les animaux de nos refuges et permettez à l\'un d\'entre eux d\'être adopté et de passer le reste de sa vie dans une famille bienveillante !',
					link: '/animals/adoption',
					tictac: 'rigth',
					btnText: 'J\'adopte un animal',
					btnTictac: 'rigth',
					btnColor: 'orange',
					image: '',
				},
				{
					text: 'Aidez-nous à mener à bien nos missions ! La SPA vit principalement de la générosité du public et compte donc sur votre soutien pour secourir, défendre et protéger les animaux.',
					link: '/',
					tictac: 'rigth',
					btnText: 'Je fais un don',
					btnTictac: 'rigth',
					btnColor: 'orange',
					image: '',
				},

			]
		}
	},
}
</script>

<style lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.home {

	&--call-action {
		height: 85vh;

		&--donation {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: calc-rem(70);

			p {
				margin: calc-rem(20) calc-rem(50);
				text-align: center;
			}

			button {
				width: 50vw;
			}
		}

		&--background {
			position: absolute;
			height: 90vh;
			width: 100vw;
			overflow-x: hidden;
			top: 12vh;
			z-index: -1;

			&-paw, &-bubble {
				position: absolute;

			}

			&-paw {
				&-1 {
					transform: scale(0.8);
					left: 60vw;
					top: -5vw
				}

				&-2 {
					transform: scale(1.5) rotate(40deg);
					left: -20vw;
					bottom: 20vh;
				}

				&-3 {
					transform: scale(0.5);
					bottom: 2vh;
					left: 60vw;
				}
			}

			&-bubble {
				&-1 {
					transform: scale(1.2);
					top: 8vh;
					left: -6vw;
				}

				&-2 {
					left: 90vw;
					top: 15vh;
				}

				&-3 {
					transform: scale(0.5);
					left: 5vw;
					top: 30vh;
				}
			}
		}

	}

	&--refuge {
		background: no-repeat center center;
		background-image: url("../assets/refuge-vague.svg");
		background-size: cover;
		width: 100vw;
		height: 70vh;
		padding: calc-rem(60) calc-rem(10);
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h2 {
			font-size: calc-rem(20);
		}

		&--discover {
			align-self: flex-end !important;
			//.btn{
			//	backdrop-filter: blur( 14.0px );
			//	-webkit-backdrop-filter: blur( 14.0px );
			//	background: $primary-orange-rgba !important;
			//}
		}
	}

	&--actu {
		//padding: 0 calc-rem(30);
		&--header {
			padding: 0 calc-rem(30);
			display: flex;
			justify-content: space-between;
			margin: calc-rem(10) 0 calc-rem(20) 0;

			h2 {
				text-transform: uppercase;
				//width: calc-rem(200);
				//font-size: calc-rem(22);
			}

			.btn {
				font-size: calc-rem(13);
				width: max-content !important;
			}

		}

		&--slider {
			display: flex;
			width: 100vw;
			overflow: scroll;

			scroll-snap-type: x mandatory;

			.box-img {
				flex-grow: 1;
				flex-shrink: 0;
				//flex-basis: 450px;
				scroll-snap-align: start;
			}
		}
	}

	&--help {
		margin: calc-rem(20);

	}
}
</style>
