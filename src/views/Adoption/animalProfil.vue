<template>
	<main class="animalProfil">
		<div class="animalProfil--img--tictac-rigth"></div>
		<section class="animalProfil--desc">
			<p>
				<span class="fw-bold">Nom: </span> {{ animalAdoption.name }}
			</p>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Espèce: </span> {{ animalAdoption.specie }}
				</p>
				<p>
					<span class="fw-bold">Sexe: </span> {{ animalAdoption.sex }}
				</p>
			</div>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Race/Apparence: </span> {{ animalAdoption.race }}
				</p>
				<p>
					<span class="fw-bold">Date de naissance: </span> {{ animalAdoption.birthdate }}
				</p>
			</div>
			<p><span class="fw-bold">Description: </span> <br>{{ animalAdoption.more }}</p>
		</section>

		<section class="animalProfil--adoption">
			<img :src="require('@/assets/beige-wave.png')" alt=""
					class="animalProfil--adoption--design animalProfil--adoption--design-top">
			<article class="animalProfil--adoption--container">
				<h2>Je souhaite adopter</h2>
				<h2 class="animalProfil--adoption--container--animalName">{{ animalAdoption.name }} :</h2>
				<div class="animalProfil--adoption--container--button">
					<router-link to="/contact">
						<Button text="Contact" ticTac="left" color="orange" :icon="true" :icon-rigth="true"></Button>
					</router-link>
					<Button text="Itinéraire" ticTac="left" color="brown" :icon="true" :icon-rigth="true"></Button>
				</div>
			</article>
		</section>

		<BrownContainer class="animalProfil--condition">
			<template v-slot:content>
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
					<div class="animalProfil--condition--container--info--frais">
						<h3>Frais d'adoption :</h3>
						<img :src="require('@/assets/cat.svg')" alt="">
						<p>110€</p>
					</div>
					<div class="animalProfil--condition--container--info--divider"></div>
					<div class="animalProfil--condition--container--info--bring">
						<h3> N'oubliez pas d'apporter :</h3>
						<ul class="animalProfil--condition--container--info--bring--list">
							<li class="animalProfil--condition--container--info--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Pièce d'identité</p>
							</li>
							<li class="animalProfil--condition--container--info--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Justification de domicile</p>
							</li>
							<li class="animalProfil--condition--container--info--bring--list--item">
								<img :src="require('@/assets/little-paw-white.svg')" alt="">
								<p>Justificatif de revenus</p>
							</li>
						</ul>
					</div>
				</div>
			</template>

		</BrownContainer>

		<section class="animalProfil--other">
			<h2> également à l'adoption</h2>
			<article class="animalProfil--other--container">
				<box-img v-for="(animal, key) in animalsList" btn-color="orange" :btn-text="animal.name" btn-tictac="left"
						:link="animal.link" :key="key" tictac="left"></box-img>
			</article>

		</section>
		<router-link to="/animals/adoption">
			<Button text="Retour à la page d'adoption" ticTac="left" color="orange"></Button>
		</router-link>
	</main>
</template>

<script>
import Button from "../../components/button/button";
import BoxImg from "../../components/box/boxImg";
import BrownContainer from "../../components/container/brownContainer";

export default {
	name: "animalProfil",
	components: {BrownContainer, BoxImg, Button},
	firebase() {
		return{
			animalsAdoption: this.$db.ref('/animalsAdoption/').child(this.$route.params.id).get().then( (snapshot) => {
				if (snapshot.exists()){
					this.animalAdoption = snapshot.val()
					if(this.animalAdoption.specie == 'cat'){
						this.animalAdoption.specie = "Chat"
					} else if(this.animalAdoption.specie == 'dog'){
						this.animalAdoption.specie = "Chien"
					}else if(this.animalAdoption.specie == 'puppy'){
						this.animalAdoption.specie = "Chiot"
					}else if(this.animalAdoption.specie == 'kitten'){
						this.animalAdoption.specie = "Chaton"
					}
				}
			})
		}
	},
	data() {
		return {
			animalAdoption: [],
			animalsList: [
				{
					name: `Trumpy`,
					link: '/animals/adoption/1',
					img: '',
					animal: 'cat',
				},
				{
					name: 'Titi Jr',
					link: '/animals/adoption/2',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Mélania',
					link: '/animals/adoption/3',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Obama',
					link: '/animals/adoption/4',
					img: '',
					animal: 'puppy',
				},
			],

		}
	},
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.animalProfil {
	margin: calc-rem($margin-top) 0 calc-rem($margin-bottom) 0;
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
			margin-bottom: -12vh;
			padding-top: 2vh;
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
		h2 {
			color: white !important;
		}

		.animalProfil--condition--container--info {
			display: flex;
			justify-content: space-between;
			margin-top: calc-rem(20);

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
