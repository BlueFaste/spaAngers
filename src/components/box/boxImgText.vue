<template>
	<div class="box-img-text" :class="rootClasses()">
		<p>{{ text }}</p>
		<router-link :to="link">
			<Button :color="btnColor" :text="btnText" :tic-tac="btnTictac"></Button>
		</router-link>
	</div>
</template>

<script>
import Button from "../button/button";
export default {
	name: "boxImgText",
	components: {Button},
	props:{
		text: String,
		link: String,
		tictac: String,
		btnText: String,
		btnTictac: String,
		btnColor: String,
		image: String,
	},
	methods: {
		rootClasses() {
			return [{
				[`box-img-text--tictac-${this.tictac}`]: this.tictac,
			}]
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";
.box-img-text{
	@include button-tictac;

	background-image: url("../../assets/edgar-kitten.jpg");
	background-size: cover;
	backdrop-filter: darken(black, 30%);
	color: white;
	//width: 0vw;
	height: 35vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	margin: calc-rem(20) 0;

	p{
		text-align: right;
		margin: calc-rem(10);
		font-size: calc-rem(14);
	}
}

</style>
