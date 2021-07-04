<template>
<section class="volunteer">
	<article>
		<div class="volunteer--white">
			<h2>Devenir bénévole</h2>

			<p>Le bénévolat est essentiel pour la SPAA et la réalisation de sa mission : améliorer par tous les moyens le sort des animaux. Il est constitutif de son histoire, au niveau national et dans les territoires.</p>
			<p>S’engager auprès de la SPA pour venir en aide aux animaux est une formidable expérience et un enrichissement personnel. C’est aussi rejoindre la plus ancienne association de protection animale dont l’expérience et le savoir-faire nous permettent de secourir, soigner et faire adopter des milliers d’animaux chaque année.</p>
		</div>
		<BrownContainer>
			<template v-slot:content>
				<p>Vous partagez les valeurs de la SPA et soutenez nos actions ? Devenez bénévole et vivez une belle aventure à nos côtés. 4 000 bénévoles nous ont déjà rejoint !</p>
				<p>Tout bénévole doit préalablement adhérer à l’association afin notamment de bénéficier d’une assurance couvrant ses activités de bénévolat au sein de la SPA (au siège, en refuge ou autre site).
					Les frais d’adhésion sont de 25€ (tarif plein) ou 10€ (tarif réduit*).
				</p>
				<p>*Réservé aux personnes atteintes d’un handicap, à la recherche d’un emploi, percevant le minimum vieillesse ou le RSA et aux étudiants (sous réserve d’un justificatif).
				</p>
			</template>
		</BrownContainer>
	</article>
	<article class="volunteer--become">
	<h2> Rejoindez-nous</h2>
		<div class="volunteer--become--text">
			<p>Pour postuler, envoyez votre CV, une lettre de motivation et vos disponibilités par email à sitespaangers@orange.fr</p>
			<Button text="Je postule" ticTac="left" color="orange"></Button>
		</div>
	</article>

</section>
</template>

<script>
import BrownContainer from "../../components/container/brownContainer";
import Button from "../../components/button/button";
export default {
	name: "becomeVolunteer",
	components: {Button, BrownContainer}
}
</script>

<style scope lang="scss" d>
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.volunteer{
	margin-top: calc-rem($margin-top);

	h2{
		margin-bottom: calc-rem(10) !important;
	}

	&--white, &--become{
		margin: 0 calc-rem($margin-border);
	}

	&--become--text{
		display: flex;
		flex-direction: column;
		//justify-content: center;
		align-items: center;
		text-align: center;

		.button{
			width: 100%;
		}

	}
}

</style>
