<template>
	<main class="lostProfil">
		<div class="lostProfil--img--tictac-rigth"></div>
		<section class="lostProfil--desc">
			<p>
				<span class="fw-bold">Nom: </span> Dogo
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
					<span class="fw-bold">Race/Apparence: </span> Roux
				</p>
				<p>
					<span class="fw-bold">Date de naissance: </span> 11/06/2021
				</p>
			</div>
				<div class="d-flex">
				<p>
					<span class="fw-bold">Lieu de disparition: </span>  <br>Rue Saint-Jacques
				</p>
				<p>
					<span class="fw-bold">Date de disparition: </span> 26/06/2021
				</p>
			</div>
			<p><span class="fw-bold">Description: </span> <br>Dogo est notre nouveau chien nous l'avons perdu le 28 juin.
				Aidez-nous à le retrouver s'il vous plait !</p>
		</section>

		<BrownContainer class="lostProfil--have-seen">
			<template v-slot:content>
				<h2>Vous l'avez vu ?</h2>
				<p>Contactez dès maintenant la propriétaire Mme Carolaïne Fassau avec les coordonnées ci-dessous.
					Merci de votre aide !  </p>
				<label for="mail">Adresse e-mail :</label>
				<p id="mail">carolaïne.fassau@gmail.com</p>

				<label for="phone">Numéro de téléphone :</label>
				<p id="phone">01 23 45 67 89</p>
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
	data() {
		return {
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
