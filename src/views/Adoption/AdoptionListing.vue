<template>
	<main class="adoption">
		<section class="adoption--alert">
			<h2>Adoption responsable</h2>
			<p>Vous souhaitez adopter un animal à la SPA? Votre décision est mûrement réfléchie? Vous pouvez consulter la
				liste de nos candidats à l’adoption en identifiant le refuge le plus proche de votre domicile. Repérez le ou les
				profils d’animaux qui vous correspondent, en fonction de votre mode de vie et de la composition de votre foyer.
				Ensuite, le meilleur moyen de rentrer en contact avec le refuge est de nous adresser un e-mail à l’adresse que
				vous trouverez sur notre site, en renseignant votre démarche d’adoption responsable et le profil d’animaux qui
				vous correspondrait. Nous vous conseillons d’indiquer votre numéro de téléphone pour qu’on vous rappelle plus
				rapidement.
			</p>
			<p> Bonne chance dans votre démarche d’adoption responsable!</p>

			<p class="fw-bold"> OFFREZ-LEUR LA VIE QU'ILS MÉRITENT</p>

			<img class="adoption--alert--design" :src="require('@/assets/orange-wave.svg')" alt="">
		</section>

		<section class="adoption--list">
			<header class="adoption--list--header">
				<h2>69 animaux à adopter</h2>
				<Filters :filters="filters" @filterCheck="filterCheck($event)"></Filters>
			</header>

			<article class="adoption--list--container">
				<box-img v-for="(actu, key) in animalDisplayList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
						:link="`adoption/${key}`" :key="key" tictac="left"></box-img>
				<p v-show="animalDisplayList.length == 0">Aucun animal n'est à adopter...</p>

			</article>

			<Button text="Voir plus" ticTac="left" color="orange"></Button>
		</section>

	</main>
</template>

<script>
import Button from "../../components/button/button";
import BoxImg from "../../components/box/boxImg";
import Filters from "../../components/filters/filters";

export default {
	name: "Adoption",
	components: {Filters, BoxImg, Button},
	created() {
		this.animalDisplayList = this.animalsList
	},
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
				{
					name: `Mimi`,
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Jeanmapen',
					link: '/',
					img: '',
					animal: 'kitten',
				},
				{
					name: 'Mamapen',
					link: '/',
					img: '',
					animal: 'cat',
				},
				{
					name: 'Emma',
					link: '/',
					img: '',
					animal: 'cat',
				},
			],
			animalDisplayList: [],

			filters: [
				{
					name: 'Chiens',
					animal: 'dog',
					check: false,
				},
				{
					name: 'Chiots',
					animal: 'puppy',
					check: false,
				},
				{
					name: 'Chats',
					animal: 'cat',
					check: false,
				},
				{
					name: 'Chatons',
					animal: 'kitten',
					check: false,
				},
			],
		}
	},
	methods: {
		filterCheck(data) {
			console.log(data)
			let countFilterUncheck = 0;
			// this.filters[data].check  = !this.filters[data].check;
			this.animalDisplayList = [];
			for(const filter in this.filters) {
				console.log(this.filters[filter])
				if(this.filters[filter].check) {
					for(const animal in this.animalsList) {
						if(this.animalsList[animal].animal == this.filters[filter].animal) {
							this.animalDisplayList.push(this.animalsList[animal])
						}
					}
				} else {
					countFilterUncheck++
				}
			}
			if(countFilterUncheck == this.filters.length) {
				this.animalDisplayList = this.animalsList
			}
		},
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.adoption {

	&--alert {

		padding: calc-rem(50) calc-rem($margin-border) calc-rem(10) calc-rem($margin-border);
		background: $primary-orange;
		color: white;
		position: relative;
		margin-bottom: calc-rem(60);

		h2 {
			text-transform: uppercase;
			width: min-content;
			color: white !important;
		}

		p {
			font-size: calc-rem(12) !important;
		}

		&--design {
			width: 101vw;
			position: absolute;
			bottom: -10vh;
			left: calc-rem(-3);
		}
	}

	&--list {
		margin: 0 calc-rem($margin-border);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&--header {
			display: flex;
			justify-content: space-between;
			margin-bottom: calc-rem(10);

			h2 {
				text-transform: uppercase;
				color: $primary-brown;
				//width: min-content;
			}

		}

		&--container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			p {
				color: $primary-orange;
			}

			.box-img {
				width: 40vw !important;
				height: 30vh;
				margin: 0;
				margin-bottom: calc-rem(20);
			}

		}


	}
}

</style>
