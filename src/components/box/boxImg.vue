<template>
	<router-link :to="link" class="box-img" :class="rootClasses()">
		<div class="box-img--container">
			<Button :text="btnText" :ticTac="btnTictac" :color="btnColor"></Button>
		</div>
	</router-link>
</template>

<script>
import Button from "../button/button";

export default {
	name: "boxImg",
	components: {Button},
	props: {
		link: String,
		tictac: String,
		btnText: String,
		btnTictac: String,
		btnColor: String,
		image: String,
	},
	created() {
		console.log(this.tictac)
	},
	methods: {
		rootClasses() {
			return [{
				[`box-img--tictac-${this.tictac}`]: this.tictac,
			}]
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.box-img {
	@include button-tictac;

	background: no-repeat center center;
	background-image: url("../../assets/edgar-kitten.jpg");
	background-size: cover;
	width: 70vw;
	height: 40vh;
	display: flex;
	justify-content: center;
	margin: 0 calc-rem(20);

	&--container {
		display: flex;
		justify-content: center;
		align-self: flex-end;
		text-decoration: none;

		.btn {
			backdrop-filter: blur(14.0px);
			-webkit-backdrop-filter: blur(14.0px);
			background: $primary-orange-rgba !important;
		}
	}




}

</style>
