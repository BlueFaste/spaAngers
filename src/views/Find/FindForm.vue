<template>
	<section class="findForm">
		<h2>Mon annonce</h2>
		<article class="findForm--animal">
			<h3 class="findForm--animal--titre--tictac-left">L'animal</h3>
			<div class="d-flex justify-content-between">
				<Form @change="textUpdate('specie', $event)" type="text" placeholder="Espèce"></Form>
				<Form @change="textUpdate('sexe', $event)" type="text" placeholder="Sexe"></Form>
			</div>
			<Form @change="textUpdate('race', $event)" type="text" placeholder="Race/apparence"></Form>
		</article>

		<article class="findForm--informations">
			<h3 class="findForm--informations--titre--tictac-left">Informations supplémentaires</h3>
			<Form @change="textUpdate('findPlace', $event)" type="text" placeholder="Lieu où vous l'avez trouvé"></Form>
			<Form @change="textUpdate('findDate', $event)" type="text" placeholder="Trouvé le..."></Form>
			<Form @change="textUpdate('findDescription', $event)" type="textarea" placeholder="Description"></Form>
			<Form class="findForm--informations--input-file" type="file" placeholder="Ajouter une image" text-after="Ajouter une image +"></Form>
		</article>
		<Button text="Poster l'annonce" ticTac="left" color="orange" @click="sendAnimal"></Button>
		<PopUp @close="openPopUp" :text-array="['L\'annonce à bien été posté']" v-show="popUpMessage"></PopUp>

	</section>
</template>

<script>
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import PopUp from "../../components/popUp/PopUp";

export default {
	name: "findForm",
	components: {PopUp, Button, Form},
	firebase() {
		return{
			animalsFind: this.$db.ref('/animalsFind/')
		}
	},
	data(){
		return{
			popUpMessage : false,
			formValue: {
				specie:'',
				sex:'',
				race:'',

				findPlace:'',
				findDate:'',
				findDescription:'',
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
			this.$firebaseRefs.animalsFind.push(this.formValue)
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
