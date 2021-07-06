<template>
	<section class="lostForm">
		<h2>Mon annonce</h2>
		<article class="lostForm--animal">
			<h3 class="lostForm--animal--titre--tictac-left">Mon animal</h3>
			<div class="d-flex justify-content-between">
				<Form type="text" placeholder="Nom"></Form>
				<Form  type="date" placeholder="Date de naissance"></Form>
			</div>
			<div class="d-flex justify-content-between">
				<Form type="text" placeholder="Espèce"></Form>
				<Form type="text" placeholder="Sexe"></Form>
			</div>
			<Form type="text" placeholder="Race/apparence"></Form>
		</article>

		<article class="lostForm--coord">
			<h3 class="lostForm--coord--titre--tictac-left">Mes coordonnées</h3>
			<div class="lostForm--coord--input">
				<select name="civilité" id="civilité" class="select select--tictac-left">
					<option value="">Civilité</option>
					<option value="M">Monsieur</option>
					<option value="Mme">Madame</option>
					<option value="other">Autre</option>
				</select>
				<Form type="text" placeholder="Prénom"></Form>
			</div>
			<Form type="text" placeholder="Nom"></Form>
			<select name="country" id="country" class="select select--tictac-left">
				<option value="France">France</option>
				<option value="Allemagne">Allemagne</option>
				<option value="Belgique">Belgique</option>
				<option value="Autriche">Autriche</option>
				<option value="Bulgarie">Bulgarie</option>
				<option value="Chypre">Chypre</option>
				<option value="Croatie">Croatie</option>
				<option value="Danemark">Danemark</option>
				<option value="Espagne">Espagne</option>
				<option value="Estonie">Estonie</option>
				<option value="Finlande">Finlande</option>
				<option value="Grèce">Grèce</option>
				<option value="Hongrie">Hongrie</option>
				<option value="Irlande">Irlande</option>
				<option value="Italie">Italie</option>
				<option value="Lettonie">Lettonie</option>
				<option value="Lituanie">Lituanie</option>
				<option value="Luxembourg">Luxembourg</option>
				<option value="Malte">Malte</option>
				<option value="Pays-Bas">Pays-Bas</option>
				<option value="Pologne">Pologne</option>
				<option value="Portugal">Portugal</option>
				<option value="Tchéquie">Tchéquie</option>
				<option value="Roumanie">Roumanie</option>
				<option value="Slovaquie">Slovaquie</option>
				<option value="Slovénie">Slovénie</option>
				<option value="Suède">Suède</option>
			</select>
			<Form type="text" placeholder="Votre adresse email"></Form>
			<Form type="tel" placeholder="Numéro de télephone"></Form>
		</article>

		<article class="lostForm--disparition">
			<h3 class="lostForm--disparition--titre--tictac-left">La disparition</h3>
			<Form type="text" placeholder="Lieu de disparition"></Form>
			<Form type="text" placeholder="Date de disparition"></Form>
			<Form type="textarea" placeholder="Détail supplémentaires..."></Form>
			<Form class="lostForm--disparition--input-file" type="file" placeholder="Ajouter une image" text-after="Ajouter une image +"></Form>
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
	name: "lostForm",
	components: {Button, Form},
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.lostForm {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	.button {
		width: 82vw;
	}

	&--animal, &--coord, &--disparition {
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

	&--coord {
		margin: calc-rem(40) 0;

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

		#country {
			width: 100%;

		}

		&--orga {
			display: flex;

			input {
				display: none;
			}

			label {
				margin-left: calc-rem(10);
				display: flex;
				align-items: center;
				background-color: white;
				font-weight: initial !important;
				text-transform: initial;
			}

			label.checked {
				background-color: white;
				color: $primary-brown;
			}

			label::before {
				content: '';
				margin-right: calc-rem(10);
				display: inline-block;
				border: solid 1px $primary-brown;
				border-radius: 20px;
				width: calc-rem(30);
				height: calc-rem(20);

			}

			label.checked:before {
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				content: '✔';
				background-color: $primary-orange;
				border: $primary-orange;
			}
		}
	}

	&--disparition {

		&--input-file{
			.form--input-email{
				display: none;
			}
		}
	}

}

</style>
