<template>
	<BrownContainer class="newsletter">
		<template v-slot:content>
			<h2>Newsletter</h2>
			<p>En vous inscrivant à la Newsletter de la SPA, vous recevrez dans votre boîte mail les dernières actualités
				de la Société Protectrice des Animaux. Merci de l'intérêt que vous portez à notre action.</p>
			<Form @submit="newsLetter"></Form>
		</template>
	</BrownContainer>
</template>

<script>
import Form from "../form/form";
import BrownContainer from "../container/brownContainer";

export default {
	name: "Newsletter",
	components: {BrownContainer, Form},
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
	h2 {
		text-transform: uppercase;
		color: white !important;
	}
}

</style>
