<template>
	<main class="lostListing">
		<header class="lostListing--header">
			<h2> 3 Animaux perdus</h2>
			<Filters :filters="filters" @filterCheck="filterCheck($event)"></Filters>
		</header>
		<section class="lostListing--list">
			<box-img v-for="(actu, key) in animalDisplayList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
					:link="actu.link" :key="key" tictac="left"></box-img>
			<p v-show="animalDisplayList.length == 0">Aucun animal n'a été perdu...</p>
		</section>

		<section class="lostListing--text">
			<p class="fw-bold">Vous aussi vous avez perdu votre animal ?</p>

			<p>La SPAA Angers vous permet de poster une annonce sur notre site web et nous ferons tout pour que vous
				retrouviez votre animal.</p>

			<p>Postez votre annonce en cliquant sur le bouton ci-dessous.</p>

			<router-link to="/">
				<Button text="Poster mon annonce" ticTac="left" color="orange"></Button>
			</router-link>

		</section>

	</main>
</template>

<script>
import Filters from "../../components/filters/filters";
import BoxImg from "../../components/box/boxImg";
import Button from "../../components/button/button";

export default {
	name: "LostListing",
	components: {Button, BoxImg, Filters},
	created() {
		this.animalDisplayList = this.animalsList
	},
	data() {
		return {
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

			animalDisplayList: [],
			animalsList: [
				{
					name: `Lili Beillourd`,
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

.lostListing {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	&--header {
		display: flex;
		justify-content: space-between;
		margin-bottom: calc-rem(10);

		h2 {
			text-transform: uppercase;
			width: 50vw;
		}
	}

	&--list {
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

	&--text {
		display: flex;
		flex-direction: column;

		.button {
			align-self: end;
		}
	}

}

</style>
