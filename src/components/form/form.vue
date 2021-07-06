<template>
	<form class="form form--tictac-left">
			<textarea :placeholder="placeholder" v-if="type=='textarea'" rows="6">
		</textarea>
		<input v-else :type="type" :placeholder="placeholder"
				class="form--input form--input-email">

		<input v-if="submitText" type="submit" class="form--input form--input-submit"
				:value="submitText" @click.prevent="$emit('submit')">
		<span v-if="textAfter">{{textAfter}}</span>
	</form>
</template>

<script>
export default {
	name: "form",
	props:{
		type: String,
		placeholder: String,
		submitText: String,
		textAfter: String,
	}
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

	&--input, textarea {

		border: none;
		background: white;

		&-email {
			width: 100%;
			border-radius: 20px;
		}

		&-submit {
			border-radius: 20px;
		}
	}
}


</style>
