<template>
	<b-button class="button" :class="rootClasses()">{{ text }}</b-button>

</template>

<script>
export default {
	name: "button",
	props: {
		text: String,
		ticTac: String,
		color: String,
	},
	methods: {
		rootClasses() {
			return [{
				[`button--tictac-${this.ticTac}`]: this.ticTac,
				[`button--color-${this.color}`]: this.color,
			}]
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.button {
	font-family: $font-family-base !important;
	margin: calc-rem(10);
	border: none !important;
	text-transform: uppercase;
	font-weight: bold;

	&--color-orange{
		background-color: $primary-orange !important;
		@include hover {
			background-color: darken($primary-orange, 10%) !important;
		}
	}

	&--color-brown{
		background-color: $primary-brown !important;

		@include hover {
			background-color: darken($primary-brown, 10%) !important;
		}

	}


	@include active;
	@include button-tictac;
}
</style>
