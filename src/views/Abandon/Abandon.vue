<template>
<section class="abandon">
	<article class="abandon--solution">
		<h2>Conditions d'abandon</h2>
		<p>Les problèmes importants afférant aux abandons de chiens et chats nous amènent à en faire un article. Abandons dont le nombre impressionnant place le phénomène au premier rang de ce qu'on appelle la maltraitance. «Le refuge de la SPAA d’ANGERS» est une bonne solution dans les cas difficiles où les maîtres partent à l'étranger par exemple sans avoir la possibilité de prendre leurs animaux avec eux ou dans le cas d'un décès.</p>
		<p>Par contre, on ne peut accepter que le refuge de la SPAA d’ANGERS soit considéré comme une solution de facilité permettant, pour des propriétaires sans scrupule et bien peu courageux, de se débarrasser des animaux sans le moindre prétexte.</p>
	</article>

	<BrownContainer class="abandon--alert">
		<template v-slot:content>
			<p>Pour ces raisons, nous vous demandons de bien réfléchir avant d’abandonner votre animal.
				N'hésitez pas à nous contacter.</p>
		</template>
	</BrownContainer>

	<article class="abandon--tarif">
		<h2>Tarif d'un abandon volontaire</h2>
		<div class="abandon--tarif--animal">
			<div class="abandon--tarif--animal--cat">
				<img :src="require('@/assets/cat-black.svg')" alt="">
				<h3>Chat</h3>
				<p>50€</p>
			</div>
			<div class="abandon--tarif--animal--divider"></div>
			<div class="abandon--tarif--animal--dog">
				<img :src="require('@/assets/dog-seating-black.svg')" alt="">
				<h3>Chien</h3>
				<p>50€</p>
			</div>
		</div>
	</article>
	<router-link to="/">
		<Button text="Nous contacter" ticTac="left" color="orange"></Button>
	</router-link>


</section>
</template>

<script>
import BrownContainer from "../../components/container/brownContainer";
import Button from "../../components/button/button";
export default {
	name: "Abandon",
	components: {Button, BrownContainer}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.abandon{

	display: flex;
	flex-direction: column;
	align-items: center;
	.button{
		//margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);
		width: 80vw;
	}

	&--solution{
		margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

		h2{
			margin-bottom: calc-rem(10) !important;
			width: 50vw;
		}
	}

	&--alert{
		font-weight: bold;
		text-align: center;
		p{
			font-size: calc-rem(16) !important;
		}
	}

	&--tarif{
		margin: 0 calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);
		font-weight: bold !important;

		h2{
			margin-bottom: calc-rem(10) !important;
		}

		h3{
			text-transform: uppercase;
			margin: calc-rem(10) 0;
			font-weight: bold !important;
		}

		p{
			font-size: calc-rem(16) !important;
		}
		&--animal{
			display: flex;
			justify-content: space-between;

			&--divider{
				width: 3px;
				background-color: $primary-brown;
				border-radius: 20px;
			}

			&--dog, &--cat{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}

}

</style>
