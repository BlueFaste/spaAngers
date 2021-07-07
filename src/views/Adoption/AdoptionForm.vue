<template>
	<section class="adoptionForm">
		<h2>Ajouter un animal</h2>
		<article class="adoptionForm--animal">
			<h3 class="adoptionForm--animal--titre--tictac-left">Infos animal</h3>
			<div class="d-flex justify-content-between">
				<Form type="text" placeholder="Nom"></Form>
				<Form  type="date" placeholder="Date de naissance"></Form>
			</div>
			<div class="d-flex justify-content-between">
				<Form type="text" placeholder="Espèce"></Form>
				<Form type="text" placeholder="Sexe"></Form>
			</div>
			<Form type="text" placeholder="Race/apparence"></Form>
			<Form type="textarea" placeholder="Détail supplémentaires..."></Form>
			<Form class="adoptionForm--disparition--input-file" type="file" placeholder="Ajouter une image" text-after="Ajouter une image +"></Form>

		</article>

			<Button text="Poster l'adoption" ticTac="left" color="orange" @click="sendMessage"></Button>


		<PopUp @close="sendMessage" :text-array="['L\'annonce d\'adoption à bien été posté']" v-show="popUpMessage"></PopUp>

	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import PopUp from "../../components/popUp/PopUp";

export default {
	name: "adoptionForm",
	components: {PopUp, Button, Form},
	data(){
		return{
			popUpMessage: false,
		}
	},
	methods: {
		sendMessage(){
			this.popUpMessage = !this.popUpMessage
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.adoptionForm {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	.button {
		width: 82vw;
	}

	&--animal {
		&--titre {
			@include button-tictac
		}
	}

	.select {
		background-color: white;
		border: solid 1px $primary-brown;
		padding: calc-rem(10) calc-rem(5);
		margin: calc-rem(0) 0;
		@include button-tictac
	}

	form {
		border: solid 1px $primary-brown;
		margin: calc-rem(10) 0;
	}

	.d-flex form{
		width: 47%;
	}

	h2 {
		margin-bottom: calc-rem(20) !important;
	}

	h3 {
		text-transform: initial !important;
		background-color: $primary-brown;
		text-align: center;
		color: white !important;
		padding: calc-rem(5) 0 !important;
		font-weight: bold;
	}

	&--animal {
		div{
			form{
				margin: calc-rem(5) 0;
			}
		}
		&--type {
			display: flex;
			justify-content: space-between;
			margin: calc-rem(15) 0;
		}
	}


}

</style>
