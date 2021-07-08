<template>
	<main class="actuality">
		<header class="actuality--header">
			<h2>Les dernières actualités</h2>
			<box background="beige" tic-tac="rigth">
				<template v-slot:content>
					{{ actuList.length }} articles
				</template>
			</box>
		</header>
		<div class="actuality--container">
			<box-img v-for="(actu, key) in actuDisplayList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
					:link="`/actuality/${key}`" :key="key" tictac="left"></box-img>
		</div>
		<Button text="Voir plus" ticTac="left" color="orange" @click="addMore" v-if="actuDisplayList.length !== actuList.length"></Button>
	</main>
</template>

<script>
import Box from "../../components/box/box";
import BoxImg from "../../components/box/boxImg";
import Button from "../../components/button/button";

export default {
	name: "Actuality",
	components: {Button, BoxImg, Box},
	created() {
		this.actuDisplayList = this.actuList.slice(0,this.numberDisplay);
	},
	data() {
		return {
			numberDisplay: 6,
			multiplicateurDisplay:1,

			actuDisplayList: [],
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
				{
					name: 'Stériliser son animal',
					link: '/',
					img: '',
				},
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
				{
					name: 'Stériliser son animal',
					link: '/',
					img: '',
				},
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
				{
					name: 'Stériliser son animal',
					link: '/',
					img: '',
				},
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
				{
					name: 'Stériliser son animal',
					link: '/',
					img: '',
				},
			],
		}
	},
	methods: {
		addMore(){
			this.multiplicateurDisplay++;
			this.actuDisplayList = this.actuList.slice(0 , (this.numberDisplay*this.multiplicateurDisplay));
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.actuality {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);
	display: flex;
	flex-direction: column;
	align-items: center;

	&--header {
		display: flex;
		margin-bottom: calc-rem(20);

		h2 {
			flex: min-content;
			text-transform: uppercase;
		}

		.box {
			flex: auto;
		}
	}

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

</style>
