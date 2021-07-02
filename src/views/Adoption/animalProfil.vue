<template>
	<div class="animalProfil">
		<div class="animalProfil--img--tictac-rigth"></div>
		<div class="animalProfil--desc">
			<p>
				<span class="fw-bold">Nom: </span> Titi JR
			</p>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Espèce: </span> Chat
				</p>
				<p>
					<span class="fw-bold">Sexe: </span> Male
				</p>
			</div>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Race/Apparence: </span> Tigré
				</p>
				<p>
					<span class="fw-bold">Date de naissance: </span> 03/10/2020
				</p>
			</div>
			<p><span class="fw-bold">Description: </span> <br>Très gentil et câlineur. Parle beaucoup, a beaucoup de
				caractère, très exclusif, serait très bien seul dans une famille.</p>
		</div>

		<div class="animalProfil--adoption">
			<img :src="require('@/assets/beige-wave.png')" alt=""
					class="animalProfil--adoption--design animalProfil--adoption--design-top">
			<div class="animalProfil--adoption--container">
				<h2>Je souhaite adopter</h2>
				<h2 class="animalProfil--adoption--container--animalName">Titi JR :</h2>
				<div class="animalProfil--adoption--container--button">
					<Button text="Contact" ticTac="left" color="orange" :icon="true" :icon-rigth="true"></Button>
					<Button text="Itinéraire" ticTac="left" color="brown" :icon="true" :icon-rigth="true"></Button>
				</div>
			</div>
		</div>

		<div class="animalProfil--condition">
			<img :src="require('@/assets/brown-wave.svg')" alt=""
					class="animalProfil--condition--design animalProfil-condition--design-top">
			<div class="animalProfil--condition--container">
				<h2>Conditions d'adoption</h2>
				<p>En adoptant à la SPA, vous acceptez de participer aux frais engendrés par la prise en charge de l’animal dans
					le cadre d’une adoption responsable dont les soins, l’hébergement, la nourriture, la vaccination, la
					stérilisation, l'éducation... </p>
				<p>
					Vous trouverez aussi auprès de nos équipes des professionnels capables de vous donner les meilleurs conseils
					pour accueillir votre nouveau compagnon.
					Par votre participation financière, vous continuerez à faire grandir notre mouvement de solidarité envers les
					animaux abandonnés et maltraités.</p>
				<div class="animalProfil--condition--container--info">
					<div class="animalProfil--condition--container--frais">
						<h3>Frais d'adoption :</h3>
						<img :src="require('@/assets/cat.svg')" alt="">
						<p>110€</p>
					</div>
					<div class="animalProfil--condition--container--divider"></div>
					<div class="animalProfil--condition--container--bring">
						<h3> N'oubliez pas d'apporter :</h3>
						<ul class="animalProfil--condition--container--bring--list">
							<li class="animalProfil--condition--container--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Pièce d'identité</p>
							</li>
							<li class="animalProfil--condition--container--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Justification de domicile</p>
							</li>
							<li class="animalProfil--condition--container--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Justificatif de revenus</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<img :src="require('@/assets/brown-wave.svg')" alt=""
					class="animalProfil--condition--design animalProfil-condition--design-bottom">
		</div>

		<div class="animalProfil--other">
			<h2> également à l'adoption</h2>
			<div class="animalProfil--other--container">
				<box-img v-for="(animal, key) in animalsList" btn-color="orange" :btn-text="animal.name" btn-tictac="left"
						:link="animal.link" :key="key" tictac="left"></box-img>
			</div>

		</div>
		<router-link to="/animals/adoption">
			<Button text="Retour à la page d'adoption" ticTac="left" color="orange"></Button>
		</router-link>
	</div>
</template>

<script>
import Button from "../../components/button/button";
import BoxImg from "../../components/box/boxImg";

export default {
	name: "animalProfil",
	components: {BoxImg, Button},
	data() {
		return {
			animalsList: [
				{
					name: `Trumpy`,
					link: '/',
					img: '',
					animal: 'cat',
				},
				{
					name: 'Titi Jr',
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Mélania',
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Obama',
					link: '/',
					img: '',
					animal: 'puppy',
				},
			],

		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.animalProfil {
	margin: calc-rem(50) 0 calc-rem(10) 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	&--img {
		@include button-tictac {
			margin: 0 calc-rem($margin-border);
			margin-bottom: calc-rem(15);
			width: 90%;
			height: 50vh;
			background: no-repeat center center;
			background-image: url("../../assets/edgar-kitten.jpg");
			background-size: cover;
		}
	}

	&--desc {
		margin: 0 calc-rem($margin-border);

		p {
			min-width: 40vw;
		}
	}

	&--adoption {
		&--design {
			width: 103vw;

			&-top {
				margin-bottom: -1px;
			}

			&-down {
				margin-top: -1px;
			}
		}

		&--container {
			padding: 0 calc-rem($margin-border) 10vh calc-rem($margin-border);
			//margin-bottom: -12vh;
			background: $primary-beige;

			&--animalName {
				color: $primary-orange !important;
			}

			&--button {
				display: flex;
				margin-top: 2vh;

				.button {
					width: 40vw;
				}
			}

		}


	}

	&--condition {
		&--design {
			width: 100vw;
			&-top {
				background: blue;
				-webkit-transform: scaleY(-1);
				transform: scaleY(-1);
				margin-bottom: -1px;
			}

			&-bottom {
				margin-top: -1px;
			}
		}

		&--container {
			background: $primary-brown;
			box-shadow: 0 0 2rem 2rem darken($primary-brown, 7%) inset;
			color: white;
			padding: calc-rem(20) calc-rem($margin-border);

			&--info {
				display: flex;
				justify-content: space-between;
				margin-top: calc-rem(20);
			}

			h2 {
				color: white !important;
			}

			h3 {
				font-size: calc-rem(12) !important;
			}

			&--frais {
				display: flex;
				flex-direction: column;
				align-items: center;

				h3 {
					width: max-content;
					margin-right: calc-rem(20);
				}

				p {
					font-size: calc-rem(25) !important;
					font-weight: bold;
					margin-top: calc-rem(15);
				}
			}

			&--divider {
				width: 3px;
				border-radius: 20px;
				background: white;
				margin: 2px calc-rem(10);
				//height: 20vh;
			}

			&--bring {
				&--list {
					list-style: none;
					margin-top: calc-rem(20);
					padding: 0 !important;

					&--item {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						margin: calc-rem(10) 0;

						p {
							margin: 0 calc-rem(10);
						}
					}
				}
			}
		}
	}

	&--other {
		margin: 0 calc-rem($margin-border);

		&--container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.box-img {
				width: 40vw !important;
				height: 30vh;
				margin: 0;
				margin-bottom: calc-rem(20);
				//font-size: calc-rem(11) !important;
				//
				//.btn{
				//	font-size: calc-rem(11) !important;
				//
				//}
			}
		}
	}
}


</style>
