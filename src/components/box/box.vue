<template>
	<div class="box" :class="rootClasses()">
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	name: "box",
	props:{
		background: String,
		ticTac: String,
		size: String,
	},
	methods: {
		rootClasses() {
			return [{
				[`box--tictac-${this.ticTac}`]: this.ticTac,
				[`box--background-${this.background}`]: this.background,
				[`box--size-${this.size}`]: this.size,
			}]
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.box{
	@include box-tictac;

	padding: calc-rem(15);
	margin: calc-rem(20);
	//width: max-content;
	max-width: 50%;

	//background: rgba( 255, 236, 222, 0.45 );
	backdrop-filter: blur( 14.0px );
	-webkit-backdrop-filter: blur( 14.0px );

	p{
		font-size: calc-rem(14);
		margin: 0;
	}
	h1{
		font-size: calc-rem(20);
		margin: 0;
	}

	h3{
		font-size: calc-rem(13);
		margin: 0;
		text-transform: uppercase;
		font-weight: bold;
	}

	&--background-beige{
		background: $primary-beige-rgba;
		color: $text-color;
	}

	&--background-orange{
			background: $primary-orange-rgba;
			color: white;
	}

	&--size-50{
		max-width: 50%;
	}

	&--size-100 {
		max-width: 100%;
	}


}

</style>
