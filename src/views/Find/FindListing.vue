<template>
	<main class="findListing">
		<header class="findListing--header">
			<h2>{{ animalsFind.length }} Animaux trouvés</h2>
			<Filters :filters="filters" @filterCheck="filterCheck($event)"></Filters>
		</header>
		<section class="findListing--list">
			<box-img v-for="(animal, key) in animalDisplayList" btn-color="orange" :btn-text="animal.name" btn-tictac="left"
					:link="`find/${animal['.key']}`" :key="key" tictac="left"></box-img>
			<p v-show="animalDisplayList.length == 0">Aucun animal n'a été trouvé...</p>

		</section>

		<router-link to="form/find">
			<Button text="Voir plus" ticTac="left" color="orange"></Button>
		</router-link>
	</main>
</template>

<script>
import Filters from "../../components/filters/filters";
import BoxImg from "../../components/box/boxImg";
import Button from "../../components/button/button";

export default {
	name: "findListing",
	components: {Button, BoxImg, Filters},
	created() {
		this.animalDisplayList = this.animalsFind
	},
	firebase() {
		return{
			animalsFind: this.$db.ref('/animalsFind/')
		}
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

			animalsFind: [
				{
					name: `Avenue du Général Patton`,
					link: '/',
					img: '',
					animal: 'cat',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'kitten',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'puppy',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'dog',
				},
				{
					name: 'Avenue du Général Patton',
					link: '/',
					img: '',
					animal: 'dog',
				},
			],
			animalDisplayList: [],
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
					for(const animal in this.animalsFind) {
						if(this.animalsFind[animal].specie == this.filters[filter].animal) {
							this.animalDisplayList.push(this.animalsFind[animal])
						}
					}
				} else {
					countFilterUncheck++
				}
			}
			if(countFilterUncheck == this.filters.length) {
				this.animalDisplayList = this.animalsFind
			}
		},
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.findListing {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	a{
		align-self: center;
	}

	&--header {
		display: flex;
		justify-content: space-between;
		margin-bottom: calc-rem(10);

		h2 {
			text-transform: uppercase;
		}
	}

	&--list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;

		p {
			color: $primary-orange;
		}

		.box-img {
			width: 40vw !important;
			height: 30vh;
			margin: 0;
			margin-bottom: calc-rem(20);
			//font-size: calc-rem(11);
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
