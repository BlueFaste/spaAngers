<template>
	<form class="form form--tictac-left">
		<input type="email" placeholder="Votre adresse e-mail"
				class="form--input form--input-email">
		<input type="submit" class="form--input form--input-submit"
				value=">" @click.prevent="$emit('submit')">
	</form>
</template>

<script>
export default {
	name: "form"
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.form {
	@include button-tictac {
		display: flex;
		background: white;
		padding: calc-rem(10);
	}

	&--input {

		border: none;
		background: white;

		&-email {
			width: 72vw;
			border-radius: 20px;
		}

		&-submit {
			border-radius: 20px;
		}
	}
}


</style>
