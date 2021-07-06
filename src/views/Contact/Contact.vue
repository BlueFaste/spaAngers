<template>
	<section class="contact">
		<h2>Contactez-nous</h2>

		<article class="contact--coord">
			<h3 class="contact--coord--titre--tictac-left">Vos coordonnées</h3>
			<div class="contact--coord--input">
				<select name="civilité" id="civilité" class="select select--tictac-left">
					<option value="">Civilité</option>
					<option value="M">Monsieur</option>
					<option value="Mme">Madame</option>
					<option value="other">Autre</option>
				</select>
				<Form type="text" placeholder="Prénom"></Form>
			</div>
			<Form type="text" placeholder="Nom"></Form>
			<Form type="text" placeholder="Votre adresse email"></Form>
		</article>

		<article class="contact--message">
			<h3 class="contact--message--titre--tictac-left">Votre message</h3>
			<Form type="text" placeholder="Objet"></Form>
			<Form type="textarea" placeholder="Message"></Form>
		</article>

		<Button text="Envoyer" ticTac="left" color="orange" @click="sendMessage"></Button>

		<PopUp @close="sendMessage" :text-array="['Votre message à bien été envoyé', 'Nous vous contacterons dès que possible']" v-show="popUpMessage"></PopUp>
	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import PopUp from "../../components/popUp/PopUp";

export default {
	name: "contact",
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

.contact {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	.button {
		width: 82vw;
	}

	&--coord, &--message {
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

	//header {
	//	display: flex;
	//	flex-direction: column;
	//	align-items: center;
	//
	//	h2 {
	//		margin-top: calc-rem(20);
	//		text-transform: initial;
	//		text-align: center;
	//	}
	//}

	&--coord {
		margin: calc-rem(20) 0 calc-rem(40) 0;

		&--input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: calc-rem(10);


			.form {
				width: 45vw !important;
				margin: 0;
			}
		}
	}

}

</style>
