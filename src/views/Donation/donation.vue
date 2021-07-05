<template>
	<section class="donation">
		<header>
			<img :src="require('@/assets/logo-spa.svg')" alt="">
			<h1>Votre don sauve des animaux</h1>
		</header>
		<article class="donation--don">
			<h2 class="donation--don--titre--tictac-left">Mon don</h2>
			<div class="donation--don--type">
				<div>
					<label for="donPonctuel" id="donPonctuel-label" class="checkbox--label checkbox--label--tictac-left">Don
						ponctuel</label>
					<input class="checkbox" type="checkbox" id="donPonctuel" @click="checked('donPonctuel')">
				</div>
				<div>
					<label for="donMensuel" id="donMensuel-label" class="checkbox--label checkbox--label--tictac-left">Don
						mensuel</label>
					<input class="checkbox" type="checkbox" id="donMensuel" @click="checked('donMensuel')">
				</div>
			</div>
			<div class="donation--don--type">
				<div>
					<label for="don55" id="don55-label" class="checkbox--label checkbox--label--tictac-left">55€</label>
					<input class="checkbox" type="checkbox" id="don55" @click="checked('don55')">
				</div>
				<div>
					<label for="don120" id="don120-label" class="checkbox--label checkbox--label--tictac-left">120€</label>
					<input class="checkbox" type="checkbox" id="don120" @click="checked('don120')">
				</div>
				<div>
					<label for="don200" id="don200-label" class="checkbox--label checkbox--label--tictac-left">55€</label>
					<input class="checkbox" type="checkbox" id="don200" @click="checked('don200')">
				</div>
				<div>
					<label for="don520" id="don520-label" class="checkbox--label checkbox--label--tictac-left">120€</label>
					<input class="checkbox" type="checkbox" id="don520" @click="checked('don520')">
				</div>
			</div>
			<Form type="number" textAfter="€" placeholder="Montant libre"></Form>
		</article>

		<article class="donation--coord">
			<h2 class="donation--coord--titre--tictac-left">Mes coordonnées</h2>
			<div class="donation--coord--input">
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
			<div class="donation--coord--orga">
				<input type="checkbox" id="donOrga" @click="checked('donOrga')">
				<label for="donOrga" id="donOrga-label">Je fais un don au nom d'une organisation
					ou d'une société</label>
			</div>
		</article>

		<article class="donation--reglement">
			<h2 class="donation--reglement--titre--tictac-left">Mon réglement</h2>
			<div class="donation--reglement--moyen">
				<div>
					<label for="carteBancaire" id="carteBancaire-label" class="checkbox--label checkbox--label--tictac-left">
						<img id="creditCard-img" :src="require('@/assets/credit-card.svg')" alt="">
						Carte Bancaire</label>
					<input class="checkbox" type="checkbox" id="carteBancaire" @click="checked('carteBancaire')">
				</div>
				<div>
					<label for="paypal" id="paypal-label" class="checkbox--label checkbox--label--tictac-left">
						<img id="paypal-img" :src="require('@/assets/paypal.svg')" alt="">Paypal</label>
					<input class="checkbox" type="checkbox" id="paypal" @click="checked('paypal')">
				</div>

			</div>
			<div v-if="cb">
				<Form type="text" placeholder="Numéro de carte"></Form>
				<div class="donation--reglement--cb">
					<select name="cbMonth" id="cbMonth" class="select select--tictac-left">
						<option value="">Mois</option>
						<option value="01">01</option>
						<option value="02">02</option>
						<option value="03">03</option>
						<option value="04">04</option>
						<option value="05">05</option>
						<option value="06">06</option>
						<option value="07">07</option>
						<option value="08">08</option>
						<option value="09">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>

					</select>
					<select name="cbYears" id="cbYears" class="select select--tictac-left">
						<option value="">Année</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
						<option value="2025">2025</option>
						<option value="2026">2026</option>
					</select>
					<Form type="number" placeholder="CCV" class="ccv"></Form>
				</div>

			</div>
			<router-link to="/" v-if="cb">
				<Button text="Valider le don" ticTac="left" color="orange"></Button>
			</router-link>
			<router-link to="/" v-else>
				<Button text="Continuer" ticTac="left" color="orange"></Button>
			</router-link>
		</article>

	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";

export default {
	name: "donation",
	components: {Button, Form},
	data() {
		return {
			cb: false,
		}
	},
	methods: {
		checked(idEl) {
			console.log(idEl)
			const check = document.getElementById(`${idEl}-label`);
			console.log(check.classList.value.includes('checked'))
			if(check.classList.value.includes('checked')) {
				check.classList.remove('checked')
			} else {
				check.classList.add('checked')
			}

			if(idEl == 'carteBancaire') {
				document.getElementById('paypal-label').classList.remove('checked')
				this.cb = !this.cb
			} else if(idEl == 'paypal') {
				document.getElementById('carteBancaire-label').classList.remove('checked')
				this.cb = false
			}
		},
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.donation {
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	.button {
		width: 82vw;
	}

	&--don, &--coord, &--reglement {
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

	h1{
		margin-bottom: calc-rem(20);
	}

	h2 {
		text-transform: initial !important;
		background-color: $primary-brown;
		text-align: center;
		color: white !important;
		padding: calc-rem(5) 0 !important;
	}

	label {
		background-color: $primary-beige;
		text-transform: uppercase;
		padding: calc-rem(7) calc-rem(15);
		font-weight: bold;
		transition: background-color .2s, color .2s;

	}

	.checkbox {
		display: none;
	}

	.checkbox--label {
		@include button-tictac
	}

	label.checked {
		background-color: $primary-orange;
		color: white;
		transition: background-color .2s, color .2s;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			margin-top: calc-rem(20);
			text-transform: initial;
			text-align: center;
		}
	}

	&--don {

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

	&--reglement {
		&--moyen {
			display: flex;
			justify-content: space-between;
			text-transform: initial !important;
			margin: calc-rem(10) 0;

			label {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 43vw;
				height: 35vw;
				text-transform: initial;

				img#creditCard-img {
					width: calc-rem(70);
				}

				img#paypal-img {
					width: calc-rem(40);
				}
			}
		}

		&--cb {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.ccv {
				width: 30vw;
			}
		}
	}

}

</style>
