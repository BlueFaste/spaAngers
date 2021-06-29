<template>
	<b-button class="button" :class="rootClasses()">{{ text }}</b-button>

</template>

<script>
export default {
	name: "button",
	props: {
		text: String,
		ticTac: String,
	},
	methods: {
		rootClasses() {
			return [{
				[`button--tictac-${this.ticTac}`]: this.ticTac,
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
	background-color: $primary-orange !important;
	margin: calc-rem(10);
	border: none !important;
	text-transform: uppercase;

	@include hover {
		background-color: darken($primary-orange, 10%) !important;
	}

	@include active;
	@include button-tictac;
}
</style>
