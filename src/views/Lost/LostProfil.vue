<template>
	<main class="lostProfil">
		<div class="lostProfil--img--tictac-rigth"></div>
		<section class="lostProfil--desc">
			<p>
				<span class="fw-bold">Nom: </span> {{ animalLost.name }}
			</p>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Espèce: </span> {{ animalLost.specie }}
				</p>
				<p>
					<span class="fw-bold">Sexe: </span> {{animalLost.sex}}
				</p>
			</div>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Race/Apparence: </span> <br>{{ animalLost.race }}
				</p>
				<p>
					<span class="fw-bold">Date de naissance: </span> {{ animalLost.birthdate }}
				</p>
			</div>
				<div class="d-flex">
				<p>
					<span class="fw-bold">Lieu de disparition: </span>  <br>{{ animalLost.lossPlace }}
				</p>
				<p>
					<span class="fw-bold">Date de disparition: </span> <br> {{ animalLost.lossdate }}
				</p>
			</div>
			<p><span class="fw-bold">Description: </span> <br>{{ animalLost.lossMore }}</p>
		</section>

		<BrownContainer class="lostProfil--have-seen">
			<template v-slot:content>
				<h2>Vous l'avez vu ?</h2>
				<p>Contactez dès maintenant la propriétaire {{ animalLost.ownerTitle }} {{animalLost.ownerFirstname}} {{animalLost.ownerLastname}} avec les coordonnées ci-dessous.
					Merci de votre aide !  </p>
				<label for="mail">Adresse e-mail :</label>
				<p id="mail">{{ animalLost.ownerEmail }}</p>

				<label for="phone">Numéro de téléphone :</label>
				<p id="phone">{{ animalLost.ownerPhone }}</p>
			</template>

		</BrownContainer>

		<section class="lostProfil--other">
			<h2> Également perdus</h2>
			<article class="lostProfil--other--container">
				<box-img v-for="(animal, key) in animalsList" btn-color="orange" :btn-text="animal.name" btn-tictac="left"
						:link="animal.link" :key="key" tictac="left"></box-img>
			</article>

		</section>
		<router-link to="/animals/lost">
			<Button text="Retour à la page animaux perdus" ticTac="left" color="orange"></Button>
		</router-link>
	</main>
</template>

<script>
import Button from "../../components/button/button";
import BoxImg from "../../components/box/boxImg";
import BrownContainer from "../../components/container/brownContainer";

export default {
	name: "lostProfil",
	components: {BrownContainer, BoxImg, Button},
	firebase() {
		return{
			animalsLost: this.$db.ref('/animalsLost/').child(this.$route.params.id).get().then( (snapshot) => {
				if (snapshot.exists()){
					this.animalLost = snapshot.val()
					if(this.animalLost.specie == 'cat'){
						this.animalLost.specie = "Chat"
					} else if(this.animalLost.specie == 'dog'){
						this.animalLost.specie = "Chien"
					}else if(this.animalLost.specie == 'puppy'){
						this.animalLost.specie = "Chiot"
					}else if(this.animalLost.specie == 'kitten'){
						this.animalLost.specie = "Chaton"
					}
					const birthArray =this.animalLost.birthdate.split('-')
					this.animalLost.birthdate = `${birthArray[2]}/${birthArray[1]}/${birthArray[0]}`
				}
			})
		}
	},

	data() {
		return {
			animalLost: [],
			animalsList: [
				{
					name: `Trumpy`,
					link: '/animals/lost/1',
					img: '',
					animal: 'cat',
				},
				{
					name: 'Titi Jr',
					link: '/animals/lost/2',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Mélania',
					link: '/animals/lost/3',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Obama',
					link: '/animals/lost/4',
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

.lostProfil {
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
			background-image: url("../../assets/josephine-menge-h7VBJRBcieM-unsplash.jpg");
			background-size: cover;
		}
	}

	&--desc {
		margin: 0 calc-rem($margin-border);

		p {
			min-width: 40vw;
		}
	}

	&--have-seen {
		h2 {
			color: white !important;
			margin-bottom: calc-rem(10) !important;
		}

		label{
			font-weight: bold;
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
