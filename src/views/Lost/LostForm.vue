<template>
	<section class="lostForm">
		<h2>Mon annonce</h2>
		<article class="lostForm--animal">
			<h3 class="lostForm--animal--titre--tictac-left">Mon animal</h3>
			<div class="d-flex justify-content-between">
				<Form @change="textUpdate('name', $event)" type="text" placeholder="Nom"></Form>
				<Form @change="textUpdate('birthdate', $event)"  type="date" placeholder="Date de naissance"></Form>
			</div>
			<div class="d-flex justify-content-between">
				<Form @change="textUpdate('specie', $event)" type="text" placeholder="Espèce"></Form>
				<Form @change="textUpdate('sex', $event)" type="text" placeholder="Sexe"></Form>
			</div>
			<Form @change="textUpdate('race', $event)" type="text" placeholder="Race/apparence"></Form>
		</article>

		<article class="lostForm--coord">
			<h3 class="lostForm--coord--titre--tictac-left">Mes coordonnées</h3>
			<div class="lostForm--coord--input">
				<select name="civilité" id="civilité" class="select select--tictac-left" @change="textUpdate('ownerTitle', $event.target.value)">
					<option value="">Civilité</option>
					<option value="m">Monsieur</option>
					<option value="mme">Madame</option>
					<option value="other">Autre</option>
				</select>
				<Form @change="textUpdate('ownerFirstname', $event)" type="text" placeholder="Prénom"></Form>
			</div>
			<Form @change="textUpdate('ownerLastname', $event)" type="text" placeholder="Nom"></Form>
			<Form @change="textUpdate('ownerEmail', $event)" type="text" placeholder="Votre adresse email"></Form>
			<Form @change="textUpdate('ownerPhone', $event)" type="tel" placeholder="Numéro de télephone"></Form>
		</article>

		<article class="lostForm--disparition">
			<h3 class="lostForm--disparition--titre--tictac-left">La disparition</h3>
			<Form @change="textUpdate('lossPlace', $event)" type="text" placeholder="Lieu de disparition"></Form>
			<Form @change="textUpdate('lossdate', $event)" type="text" placeholder="Date de disparition"></Form>
			<Form @change="textUpdate('lossMore', $event)" type="textarea" placeholder="Détail supplémentaires..."></Form>
			<Form class="lostForm--disparition--input-file" type="file" placeholder="Ajouter une image" text-after="Ajouter une image +"></Form>
		</article>

			<Button text="Poster l'annonce" ticTac="left" color="orange" @click="sendAnimal"></Button>
		<PopUp @close="openPopUp" :text-array="['L\'annonce de disparition a bien été postée.']" v-show="popUpMessage"></PopUp>
	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import PopUp from "../../components/popUp/PopUp";

export default {
	name: "lostForm",
	components: {PopUp, Button, Form},
	firebase() {
		return{
			animalsLost: this.$db.ref('/animalsLost/')
		}
	},
	data(){
		return{
			popUpMessage : false,
			formValue: {
				name:'',
				birthdate:'',
				specie:'',
				sex:'',
				race:'',

				ownerTitle:'',
				ownerFirstname:'',
				ownerLastname:'',
				ownerEmail:'',
				ownerPhone:'',

				lossPlace:'',
				lossdate:'',
				lossMore:'',
				enabled: true,
			}
		}
	},
	methods: {
		textUpdate(data,value){
			console.log(data)
			console.log('value',value)
			this.formValue[data]=value;
		},
		sendAnimal(){
			console.log(this.formValue)
			this.formValue.specie = this.formValue.specie.toLowerCase();
			if(this.formValue.specie == 'chat'){
				this.formValue.specie = "cat"
			} else if(this.formValue.specie == 'chien'){
				this.formValue.specie = "dog"
			}else if(this.formValue.specie == 'chiot'){
				this.formValue.specie = "puppy"
			}else if(this.formValue.specie == 'chaton'){
				this.formValue.specie = "kitten"
			}
			this.$firebaseRefs.animalsLost.push(this.formValue)
			this.openPopUp()
		},
		openPopUp(){
			console.log(this.formValue)
			this.popUpMessage = !this.popUpMessage
		},
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.lostForm{
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

	Form {
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


			.Form {
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
