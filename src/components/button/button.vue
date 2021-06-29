<template>
	<b-button>{{ text }}</b-button>

</template>

<script>
export default {
	name: "button",
	props:{
		text: String,
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/mixims";

button{
	background-color: $primary-orange !important;
	border: none !important;
	border-radius: $tic-tac-droite;
	text-transform: uppercase;

	@include hover{
		background-color: darken($primary-orange, 10%) !important;
	}

	@include active{

	}
}
</style>
