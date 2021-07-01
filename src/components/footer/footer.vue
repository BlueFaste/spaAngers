<template>
	<footer>
		<img :src="require('@/assets/brown-wave.svg')" alt=""
				class="footer--design">
		<div class="footer--container">
			<div class="footer--container--newsletter">
				<h2>Restez informés</h2>
				<p>Abonnez-vous à notre newsletter</p>
				<Form></Form>
			</div>

			<div class="footer--container--address">
				<h3>Adresse</h3>
				<p>Promenade de la Baumpette</p>
				<p>49000 - Angers</p>
			</div>

			<div class="footer--container--contact">
				<h3>Contactez-nous</h3>
				<p>Mail : <a href="mailto: sitespaaangers@orange.fr">sitespaaangers@orange.fr</a></p>
				<p>Tel : <a href="tel:+33241663223">02 41 66 32 23</a></p>
				<p>Fax : 02 41 47 37 94</p>
			</div>
		</div>
	</footer>
</template>

<script>
import Form from "../form/form";
export default {
	name: "footer",
	components: {Form}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

footer{
	.footer{
		padding-bottom: calc-rem(30);

		&--design{
			width: 100vw;
			-webkit-transform: scaleY(-1);
			transform: scaleY(-1);
			margin-bottom: -1px;
		}

		&--container{
			background: $primary-brown;
			box-shadow: 0 0 2rem 2rem darken($primary-brown, 7%) inset;
			color: white;
			padding: calc-rem(20) calc-rem(30);

			p{
				margin: 0;
			}

			h3, h2{
				text-transform: uppercase;
				font-weight: bold;
				margin-top: calc-rem(30);
			}

			h3{
				font-size: calc-rem(16);
			}

			&--newsletter, &--address, &--contact{
				margin: calc-rem(10) 0;
			}

			&--newsletter{
				.form{
					margin-top: calc-rem(5);
				}
			}

			&--contact{
				a{
					color: $primary-orange;
				}
			}

		}

	}
}
</style>
