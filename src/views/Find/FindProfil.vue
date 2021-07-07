<template>
	<main class="findProfil">
		<div class="findProfil--img--tictac-rigth"></div>
		<section class="findProfil--desc">
			<div class="d-flex">
				<p>
					<span class="fw-bold">Espèce: </span> {{ animalFind.specie }}
				</p>
				<p>
					<span class="fw-bold">Sexe: </span> {{ animalFind.sex }}
				</p>
			</div>
			<div class="d-flex">
				<p>
					<span class="fw-bold">Race/Apparence: </span> <br> {{ animalFind.race }}
				</p>
				<p>
					<span class="fw-bold">Lieu d'apparation: </span> <br>{{ animalFind.findPlace }}
				</p>
			</div>
			<p><span class="fw-bold">Description: </span> <br>{{ animalFind.findDescription }}</p>
		</section>

		<section class="findProfil--adoption">
			<img :src="require('@/assets/beige-wave.png')" alt=""
					class="findProfil--adoption--design findProfil--adoption--design-top">
			<article class="findProfil--adoption--container">
				<h2>Vous êtes le propriétaire ?</h2>
				<div class="findProfil--adoption--container--button">
					<Button text="Contact" ticTac="left" color="orange" :icon="true" :icon-rigth="true"></Button>
					<Button text="Itinéraire" ticTac="left" color="brown" :icon="true" :icon-rigth="true"></Button>
				</div>
			</article>
		</section>

		<section class="findProfil--other">
			<h2> Également trouvés</h2>
			<article class="findProfil--other--container">
				<box-img v-for="(animal, key) in animalsList" btn-color="orange" btn-tictac="left"
						:link="`${key}`" :key="key" tictac="left"></box-img>
			</article>

		</section>
		<router-link to="/animals/adoption">
			<Button text="Retour à la page animaux trouvés" ticTac="left" color="orange"></Button>
		</router-link>
	</main>
</template>

<script>
import Button from "../../components/button/button";
import BoxImg from "../../components/box/boxImg";

export default {
	name: "findProfil",
	components: {BoxImg, Button},
	firebase() {
		return{
			animalsFind: this.$db.ref('/animalsFind/').child(this.$route.params.id).get().then( (snapshot) => {
				if (snapshot.exists()){
					this.animalFind = snapshot.val()
					if(this.animalFind.specie == 'cat'){
						this.animalFind.specie = "Chat"
					} else if(this.animalFind.specie == 'dog'){
						this.animalFind.specie = "Chien"
					}else if(this.animalFind.specie == 'puppy'){
						this.animalFind.specie = "Chiot"
					}else if(this.animalFind.specie == 'kitten'){
						this.animalFind.specie = "Chaton"
					}
				}
			})
		}
	},
	data() {
		return {
			animalFind:[],
			animalsList: [
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
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.findProfil {
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
			background-image: url("../../assets/kieran-white-NKN25UfGfkQ-unsplash.jpg");
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
			padding: 0 calc-rem($margin-border) 0 calc-rem($margin-border);
			border-radius: 0 0 0 40px;
			margin-bottom: -12vh;
			padding-top: 2vh;
			background: $primary-beige;

			&--button {
				display: flex;
				margin-top: 2vh;

				.button {
					width: 40vw;
				}
			}

		}


	}

	&--other {
		margin: calc-rem(100) calc-rem($margin-border) 0 calc-rem($margin-border);

		h2{
			margin-bottom: calc-rem(10) !important;
		}

		&--container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.box-img {
				width: 40vw !important;
				height: 30vh;
				margin: 0;
				//margin: calc-rem(20) calc-rem(5) 0 calc-rem(5);
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
