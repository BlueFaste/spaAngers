<template>
	<div class="lostListing">
		<div class="lostListing--header">
			<h2>{{ animalsList.length }} Animaux trouvés</h2>
			<Filters :filters="filters"></Filters>
		</div>
		<div class="lostListing--list">
			<box-img v-for="(actu, key) in animalsList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
					:link="actu.link" :key="key" tictac="left"></box-img>
		</div>

	</div>
</template>

<script>
import Filters from "../../components/filters/filters";
import BoxImg from "../../components/box/boxImg";

export default {
	name: "LostListing",
	components: {BoxImg, Filters},
	data() {
		return {
			filters: [
				{
					name: 'Chiens',
					check: false,
				},
				{
					name: 'Chiots',
					check: false,
				},
				{
					name: 'Chats',
					check: false,
				},
				{
					name: 'Chatons',
					check: false,
				},
			],

			animalsList: [
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
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.lostListing {
	margin: calc-rem(50) calc-rem(30) calc-rem(10) calc-rem(30);

	&--header {
		display: flex;
		justify-content: space-between;
		margin-bottom: calc-rem(10);

		h2 {
			text-transform: uppercase;
		}
	}

	&--list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.box-img {
			width: 38vw !important;
			height: 25vh;
			margin: 0;
			margin-bottom: calc-rem(20);
			//font-size: calc-rem(11);
		}
	}

	&--text{
		display: flex;
		flex-direction: column;
		.button{
			align-self: end;
		}
	}

}

</style>
