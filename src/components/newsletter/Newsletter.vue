<template>
	<section class="newsletter">
		<img :src="require('@/assets/brown-wave.svg')" alt=""
				class="newsletter--design newsletter--design-top">
		<div class="newsletter--container">
			<h2>Newsletter</h2>
			<p>En vous inscrivant à la Newsletter de la SPA, vous recevrez dans votre boîte mail les dernières actualités
				de la Société Protectrice des Animaux. Merci de l'intérêt que vous portez à notre action.</p>
			<Form @submit="newsLetter"></Form>
		</div>
		<img :src="require('@/assets/brown-wave.svg')" alt=""
				class="newsletter--design newsletter--design-down">
	</section>
</template>

<script>
import Form from "../form/form";

export default {
	name: "Newsletter",
	components: {Form},
	methods: {
		newsLetter() {
			console.log('newsLetter')
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.newsletter {

	&--design {
		width: 100vw;

		&-top {
			-webkit-transform: scaleY(-1);
			transform: scaleY(-1);
			margin-bottom: -1px;
		}

		&-down {
			margin-top: -1px;
		}
	}

	&--container {
		background: $primary-brown;
		box-shadow: 0 0 2rem 2rem darken($primary-brown, 7%) inset;
		color: white;
		padding: calc-rem(20) calc-rem($margin-border);

		h2 {
			text-transform: uppercase;
			color: white !important;
		}

	}
}

</style>
