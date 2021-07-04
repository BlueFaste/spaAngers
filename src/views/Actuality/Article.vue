<template>
	<main class="article">
		<h2 class="article--title">Identifier son animal</h2>
		<div class="article--img--tictac-rigth"></div>
		<section class="article--text">
			<p class="article--text-date">Le jeudi 01 juillet 2021</p>
			<div class="fw-bold">
				<p>IDENTIFIER SON ANIMAL : SIMPLE, BASIQUE. Vraiment, l’identification n’est pas une énigme.</p>
				<p>Donner une « carte d’identité » à votre compagnon devrait tout avoir d’un réflexe pour l’ensemble des
					détenteurs d’animaux.
					C’est non seulement lui offrir une sécurité supplémentaire très importante – et pouvant lui sauver la vie ! …
					Mais c’est aussi, vous aider vous-mêmes, au cas où votre copain s’aventurerait dans une fugue imprévue ou
					pire, serait volé par des personnes malintentionnées.
				</p>
			</div>
			<p>VOUS LUI AVEZ DONNÉ UN NOM… MAIS PAS UNE PUCE ? <br>
				Vous aimez votre animal, vous tenez à lui. Vous souhaitez son bonheur et son bien-être. Tout simplement : il
				fait partie de votre famille. Quand vous l’avez accueilli chez vous, vous l’avez appelé Cacahuète. C’est votre
				ami, votre « bébé », votre trésor ! Imaginer que Cacahuète puisse disparaître et que vous ne puissiez rien y
				faire, est inenvisageable…
			</p>

			<p>Et pourtant, malgré l’obligation légale d’identifier votre animal, vous ne l’avez pas fait.</p>

			<p>Sauf qu’un soir, Cacahuète ne rentre pas à la maison. S’entament des recherches de Cacahuète, mais vous n’avez
				pour informations que sa description physique, qui malheureusement est commune.
				Cacahuète a été ramassé par les services urbains de la ville voisine et amené à la fourrière. Au mieux, il sera
				adopté par une autre famille, et vous ne retrouverez pas Cacahuète. Dans le pire des cas, Cacahuète pourra
				malheureusement être euthanasié, car il « n’appartient à personne » et n’aura pas été « réclamé » ni eu la
				chance d’être recueilli par une association de protection animale…
			</p>

			<p>
				<span class="fw-bold">L’IDENTIFICATION, UNE OBLIGATION LÉGALE</span> <br>
				L’identification est une obligation légale en France.
			</p>

			<p>Depuis juin 1989 pour les chiens.
				Depuis janvier 2012 pour les chats.
				Selon l’I-CAD, en plus de protéger l’animal, l’identification permet également « à l’État d’assurer le suivi
				sanitaire, la sécurité des populations, le respect de l’environnement, la surveillance des pratiques
				commerciales, des importations et du trafic, grâce à la traçabilité de l’animal. » Visitez leur site dédié ici.
			</p>

			<p>
				<span class="fw-bold">DONNEZ UNE FIN HEUREUSE À L’HISTOIRE DE CACAHUÈTE… !</span> <br>
				Pour sauver Cacahuète, il y a une solution évidente et simple : l’identification.
				Seul lien officiel entre l’animal et son détenteur, l’identification par puce électronique est en plus
				obligatoire pour pouvoir voyager avec votre animal !
			</p>

			<p>Bonus : sur le site de l’I-CAD, vous pouvez mettre à jour l’ensemble de vos informations de résidence,
				coordonnées, et même annoter votre adresse de vacances lorsque vous partez – ce qui réduit les risques de perdre
				votre animal durant vos congés au bord de la mer ou en montagne !
				N’oubliez pas de mettre à jour régulièrement ces informations, notamment vos coordonnées téléphoniques et email
				afin de pouvoir vous identifier le plus rapidement possible en cas de perte.
			</p>

			<p>
				<span class="fw-bold">VOYAGEZ EN TOUTE SÉRÉNITÉ AVEC CACAHUÈTE !</span> <br>
				La puce électronique est obligatoire pour pouvoir voyager avec son animal !
				Un passeport européen vous sera également demandé pour voyager en Europe comprenant le numéro d'identification
				par puce électronique !
			</p>
		</section>
		<Newsletter></Newsletter>

		<section class="article--other">
			<h2> D'autres articles</h2>
			<div class="article--other--container">
				<box-img v-for="(actu, key) in actuList" btn-color="orange" :btn-text="actu.name" btn-tictac="left"
						:link="actu.link" :key="key" tictac="left"></box-img>
			</div>

		</section>
		<router-link to="/actuality">
			<Button text="Retour aux actualités" ticTac="left" color="orange"></Button>

		</router-link>
	</main>
</template>

<script>
import Newsletter from "../../components/newsletter/Newsletter";
import BoxImg from "../../components/box/boxImg";
import Button from "../../components/button/button";

export default {
	name: "Article",
	components: {Button, BoxImg, Newsletter},
	data() {
		return {
			actuList: [
				{
					name: `Les actualités du mois de juin 2021`,
					link: '/actuality/1',
					img: '',
				},
				{
					name: 'Comment toiletter son chien',
					link: '/actuality/1',
					img: '',
				},
				{
					name: 'Stériliser son animal',
					link: '/actuality/1',
					img: '',
				},
				{
					name: 'Stériliser son animal',
					link: '/actuality/1',
					img: '',
				},

			],

		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.article {
	color: $primary-brown;
	margin: calc-rem($margin-top) 0 calc-rem($margin-bottom) 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		text-transform: uppercase;
		margin-bottom: calc-rem(10) !important;
	}

	&--title {
		margin: 0 calc-rem($margin-border) !important;
		align-self: flex-start;
	}

	&--img {
		@include button-tictac {
			margin: 0 calc-rem($margin-border);
			margin-bottom: calc-rem(15);
			width: 90%;
			height: 70vw;
			background: no-repeat center center;
			background-image: url("../../assets/edgar-kitten.jpg");
			background-size: cover;
		}
	}

	&--text {
		margin: 0 calc-rem($margin-border);
	}

	&--other {
		margin: 0 calc-rem($margin-border);

		&--container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.box-img {
				width: 40vw !important;
				height: 35vh;
				margin: 0;
				margin-bottom: calc-rem(20);
				//font-size: calc-rem(11) !important;
				//
				//.btn{
				//	font-size: calc-rem(11) !important;
				//
				//}
			}
		}
	}

}

</style>
