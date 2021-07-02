<template>
	<b-button class="button" :class="rootClasses()" @click="$emit('click')">
		<span v-if="icon && !iconRigth" class="button--icon button--icon button--icon--tictac-left" :class="iconClasses()"></span>
		{{ text }}
		<span v-if="icon && iconRigth" class="button--chevron">></span>
	</b-button>

</template>

<script>
export default {
	name: "button",
	props: {
		text: String,
		ticTac: String,
		color: String,
		textColor: String,
		icon: Boolean,
		iconCheck: Boolean,
		iconRigth: Boolean
	},
	methods: {
		rootClasses() {
			return [{
				[`button--tictac-${this.ticTac}`]: this.ticTac,
				[`button--color-${this.color}`]: this.color,
				[`button--text-color-${this.textColor}`]: this.textColor,
			}]
		},
		iconClasses() {
			return [{
				[`button--icon--check`]: this.iconCheck,
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
	display: flex;
	justify-content: center;
	align-items: center;

	&--color-orange {
		background-color: $primary-orange !important;
		@include hover {
			background-color: darken($primary-orange, 10%) !important;
		}
	}

	&--color-brown {
		background-color: $primary-brown !important;

		@include hover {
			background-color: darken($primary-brown, 10%) !important;
		}
	}

	&--color-beige {
		background-color: $primary-beige !important;

		@include hover {
			background-color: darken($primary-beige, 10%) !important;
		}
	}

	&--text-color-beige{
		color: $primary-beige !important;
	}


	@include active;
	@include button-tictac;

	&--icon {
		@include button-tictac;
		margin-right: calc-rem(5);
		display: block;
		width: calc-rem(15);
		height: calc-rem(12);
		border: solid $primary-beige;

		&--check {
			background: $primary-beige;
		}
	}

	&--chevron{
		font-weight: initial !important;
		margin-left: calc-rem(5);
	}
}
</style>
