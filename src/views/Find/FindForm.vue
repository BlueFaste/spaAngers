<template>
	<section class="findForm">
		<h2>Mon annonce</h2>
		<article class="findForm--animal">
			<h3 class="findForm--animal--titre--tictac-left">L'animal</h3>
			<div class="d-flex justify-content-between">
				<Form type="text" placeholder="Espèce"></Form>
				<Form type="text" placeholder="Sexe"></Form>
			</div>
			<Form type="text" placeholder="Race/apparence"></Form>
		</article>

		<article class="findForm--informations">
			<h3 class="findForm--informations--titre--tictac-left">Informations supplémentaires</h3>
			<Form type="text" placeholder="Lieu où vous l'avez trouvé"></Form>
			<Form type="text" placeholder="Trouvé le..."></Form>
			<Form type="textarea" placeholder="Description"></Form>
			<Form class="findForm--informations--input-file" type="file" placeholder="Ajouter une image" text-after="Ajouter une image +"></Form>
		</article>

		<router-link to="/">
			<Button text="Poster l'annonce" ticTac="left" color="orange"></Button>
		</router-link>
	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";

export default {
	name: "findForm",
	components: {Button, Form},
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.findForm {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	.button {
		width: 82vw;
	}

	&--animal, &--informations {
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
				margin: 0;
			}
		}
	}

	&--informations {
		margin-top: calc-rem(40);

		&--input-file{
			.form--input-email{
				display: none;
			}
		}
	}

}

</style>
