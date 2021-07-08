<template>
	<div class="toggleDeroulant">
		<div class="toggleDeroulant--header" @click="toggleText">
			<h3 class="toggleDeroulant--header--title"> {{ text.title }}</h3>
			<img :src="require('@/assets/chevron-black.svg')" alt="" class="toggleDeroulant--header--icon" :id="`icon-${id}`">
		</div>

		<div class="toggleDeroulant--container" :id="`container-${id}`">
			<p v-for="(text, key) in text.textArray" :key="key"> {{text}}</p>
		</div>

	</div>
</template>

<script>
export default {
	name: "ToggleDeroulant",
	props: {
		text: Object,
		id: Number,
	},
	data(){
		return{
			// toggleText : false,
		}
	},
	methods:{
		toggleText(){
			const text = document.getElementById(`container-${this.id}`)
			const icon = document.getElementById(`icon-${this.id}`)
			if (text.classList.value.includes('toggleDeroulant--container--open')){
				text.classList.remove('toggleDeroulant--container--open')
				icon.classList.remove('toggleDeroulant--header--icon--open')
			} else {
				text.classList.add('toggleDeroulant--container--open')
				icon.classList.add('toggleDeroulant--header--icon--open')

			}
		}
	}

}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";
.toggleDeroulant{
	margin-bottom: calc-rem(30);
	color: $primary-brown !important;

	&--header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: calc-rem(14);
		cursor: pointer;

		&--title{
			font-size: calc-rem(14) !important;
			font-weight: bold;
		}

		&--icon{
			transform: rotate(180deg);
			transition: transform 200ms;


			&--open{
				transform: rotate(0deg);
				transition: transform 200ms;
			}
		}
	}

	&--container{
		position: relative;
		opacity: 0;
		height: 0;
		z-index: -9;
		transition: opacity 200ms, height 200ms;

		&--open{
			opacity: 1;
			height: 100%;
			transition: opacity 200ms, height 200ms;

		}
	}

}

</style>
