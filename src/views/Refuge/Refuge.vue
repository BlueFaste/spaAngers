<template>
	<div class="refuge">
		<div class="refuge--img">
			<box background="beige" tic-tac="rigth" size="50">
				<template v-slot:content>
					<h2>Le refuge</h2>
				</template>
			</box>
		</div>

		<div class="refuge--summary">
			<h2> Sommaire</h2>
			<div class="refuge--summary--button">
				<anchor-router-link v-for="(button, key) in summaryList"
						:key="key"
						:to="{name:'refuge', hash:`#${button.id}`}"
						:scrollOptions="scrollOptions">
					<Button :text="button.name" :key="key" tic-tac="left" color="brown"
							:icon="true" :icon-rigth="true"></Button>
				</anchor-router-link>
			</div>
		</div>
		<div class="refuge--role">
			<div class="refuge--role--white">
				<h2 id="role">Notre rôle</h2>

				<p>Recueillir les animaux trouvés errant sur la voie publique</p>
				<p>Après les avoir soignés, en fonction des circonstances, vaccinés et tatoués, elle les restitue à leurs
					légitimes propriétaires ou leur trouve un nouveau foyer d'accueil.</p>
				<p>Intervenir auprès des propriétaires qui maltraitent les animaux dont ils ont la charge</p>
				<p>Et si besoin est, les poursuivre en justice. Dans ce cas, il faut constituer un dossier complet avec preuves,
					témoignages, photographies etc.... Ce que nous réalisons régulièrement avec l'aide d'une de nos
					administratrices, avocate au barreau d'ANGERS.</p>
			</div>
			<div class="refuge--role--brown">
				<img class="refuge--role--brown--design refuge--role--brown--design-top"
						:src=" require('@/assets/brown-wave.svg')" alt="">
				<div class="refuge--role--brown--container">
					<h3>La S.P.A.A. de Maine-et-Loire joue un rôle fondamental dans la vie de nos cités dont elle est un
						authentique partenaire</h3>
					<p>D'une part, elle permet aux responsables des collectivités locales ainsi qu'ils en ont le devoir d'assumer
						et de maintenir un environnement quotidien convenable, tant en terme de protection sanitaire que par rapport
						à la "gestion policée" de nos communes et aux dangers que peut représenter un animal errant sur la voie
						publique : morsures, griffures, accidents de circulation etc... Ainsi sont établies des Conventions de
						Coopérations avec les trois-quarts des communes de notre département.</p>
					<p>Par ailleurs, elle travaille en étroite coopération avec la Gendarmerie Nationale, les Polices Nationales
						et Municipales et les Sapeurs Pompiers qui peuvent (à toutes heures du jour et de la nuit) nous amener un
						animal qu'ils auront recueilli sur la voie publique.</p>
					<h3 class="fw-bold mt-5">Information Publique sur la protection de l'Environnement
					</h3>
					<p>Dans la mesure de ses moyens, elle participe également, à travers son éthique de la Protection Animale, à
						une information publique sur la Protection de l'Environnement et la mise en oeuvre d'une éthologie appliquée
						visant à définir avec réalisme et efficacité une meilleure cohabitation entre l'homme et les espèces
						animales qui l'entourent. De nombreuses heures sont ainsi consacrées à des entretiens, des présentations de
						nos activités auprès d'un très large public, des rédactions d'articles de vulgarisation médiatique, de
						mémoires d'études, des tournages de films etc....</p>
					<p>Ces quatre axes d'activités justifient à eux seuls la raison d'être de la Société Protectrice des Animaux
						Autonome de Maine-et-Loire, authentiquement intégrée à la vie sociale de notre département. Les animaux sont
						des êtres vivants à respecter comme tels, susceptibles de souffrances et faisant partie de notre
						environnement à protéger.</p>
				</div>
				<img class="refuge--role--brown--design refuge--role--brown--design-down"
						:src=" require('@/assets/brown-wave.svg')" alt="">
			</div>
		</div>

		<div class="refuge--resources">
			<div class="refuge--resources--white">
				<h2 id="resources">Nos moyens</h2>
				<p>Le refuge peut accueillir 158 chiens dont 144 en boxes individuels et 14 en 4 boxes collectifs ainsi que 72
					chats en cases individuelles. Ces structures sont réparties (bâtiments séparés) en fourrière, refuge et lieux
					de garderie. La totalité des installations où sont hébergés les animaux est chauffée en période d'hiver. Un
					suivi médical vétérinaire de soins divers est assuré tout au long de l'année et un contrôle sanitaire
					d'hygiène et d'entretien est régulièrement effectué par la Direction Départementale des Services Vétérinaires.
					Nous disposons par ailleurs de trois véhicules aménagés pour le transport des animaux.</p>
				<p>Parmi ses membres, notre Association a constitué une équipe de Délégués Enquêteurs bénévoles qui sont chargés
					du suivi du placement des chiens et des chats ainsi que des enquêtes qu'il y a lieu d'effectuer à la suite de
					lettres reçues nous signalant des cas de maltraitance d'animaux.</p>
				<p>L'ensemble de nos installations et de nos prestations de service ont été reconnues pour leurs qualités, ce
					qui nous vaut de bénéficier d'un "Label de Qualification" délivré par la Confédération Nationale Défense de
					l'animal.
				</p>
			</div>
			<div class="refuge--resources--brown">
				<img class="refuge--resources--brown--design refuge--role--brown--design-top"
						:src=" require('@/assets/brown-wave.svg')" alt="">
				<div class="refuge--resources--brown--container">
					<h3>Personnel salarié de la S.P.A.A.</h3>
					<ul>
						<li>- 4 agents à temps complet en C.D.I. (trois d'entre eux sont titulaires du Certificat de Capacité
							d'Animalier, délivré par la Direction Départementale des Services Vétérinaires) et 1 agent sous C.D.D. en
							renfort durant la période des congés. Ils sont chargés de l'accueil des visiteurs, du nettoyage des
							chenils et des chatteries, de la nourriture et des soins aux animaux, de l'entretien des installations et
							du ramassage des animaux errants à récupérer dans les communes de département liées par une Convention de
							Fourrière avec la S.P.A.A. (voir au paragraphe Trésorerie).
						</li>
						<li>- 1 secrétaire à temps partiel, chargée de toute la prise et gestion informatique des adhérants, des
							communes conventionnées avec la S.P.A.A., des mouvements des animaux, de la comptabilité etc.....
						</li>
						<li>- 1 vétérinaire salariée qui intervient le lundi et le vendredi après midi, le jeudi toute la</li>
					</ul>
				</div>
				<img class="refuge--resources--brown--design refuge--role--brown--design-down"
						:src=" require('@/assets/brown-wave.svg')" alt="">
			</div>
			<div class="refuge--resources--white">
				<h3>Trésorerie</h3>
				<p>Elle est alimentée par les cotisations de nos adhérents, des dons et legs, par les règlements des frais de
					gardiennage et d'adoption de nos chiens et chats (voir nos tarifs dans la rubrique "Adoptez-nous"), par les
					versements des redevances des communes au titre de la Convention fourrière (0.021€/habitant/an + T.V.A. à 20%)
					ainsi que par les ventes de nos diverses fournitures (laisses, colliers, médailles, tasses....) qui sont
					présentées à l'accueil de notre refuge.</p>
			</div>
		</div>
		<div class="refuge--contactDetails">
			<img class="refuge--contactDetails--design refuge--contactDetails--design-top"
					:src=" require('@/assets/brown-wave.svg')" alt="">
			<div class="refuge--contactDetails--container">
				<h2>Coordonnées</h2>
				<h3>Adresse</h3>
				<p>Promenade de la Baumette</p>
				<p>49000 - Angers</p>
				<h3>Contactez-nous</h3>
				<p>Mail : <a href="mailto: sitespaaangers@orange.fr">sitespaaangers@orange.fr</a></p>
				<p>Tel : <a href="tel:+33241663223">02 41 66 32 23</a></p>
				<p>Fax : 02 41 47 37 94</p>
			</div>

			<img class="refuge--contactDetails--design refuge--contactDetails--design-down"
					:src=" require('@/assets/brown-wave.svg')" alt="">
		</div>
		<div class="refuge--hours">
			<h2 id="hours">Horaires</h2>
			<h3>Ouverture du refuge</h3>
			<p>Les mardis mercredis et samedis après-midi sauf jours fériés (1er et 8 mai 2021 fermés) de 14h à 17h00.</p>
			<p>Prise de rendez-vous au <span class="fw-bold">06 31 .43.36.96</span>
				de <span class="fw-bold">14h30 à 16h30</span> les jours d’ouverture.</p>

			<h3>Pour la fourrière et les adoptions</h3>
			<p>Des mesures sanitaires <span class="fw-bold">strictes</span> seront applicables.</p>
			<ul>
				<li>1 - L’accès à l’intérieur sera limité à 5 visiteurs maximum pour une durée de 30 mn.</li>
				<li>2 - Le port du masque sera obligatoire.</li>
				<li>3 - La désinfection des mains à l’entrée sera obligatoire</li>
				<li>4 - La distanciation physique de 1 m minimum devra être respectée entre chaque personne.</li>
			</ul>
		</div>

		<div class="refuge--noRespect">
			<img class="refuge--noRespect--design refuge--noRespect--design-top" :src=" require('@/assets/brown-wave.svg')"
					alt="">
			<div class="refuge--noRespect--container">
				<h2>LE NON RESPECT DE CES CONSIGNES ENTRAINERA UN REFUS D’ACCES DANS L’ENCEINTE DU REFUGE </h2>
			</div>
			<img class="refuge--noRespect--design refuge--noRespect--design-down" :src=" require('@/assets/brown-wave.svg')"
					alt="">
		</div>

		<div class="refuge--accessPlan">
			<h2 id="accessPlan">Plan d'accès</h2>
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe id="gmap_canvas"
							src="https://maps.google.com/maps?q=Promenade%20de%20la%20Baumette,%20Angers&t=&z=13&ie=UTF8&iwloc=&output=embed"
							frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import Box from "../../components/box/box";
import Button from "../../components/button/button";
import AnchorRouterLink from 'vue-anchor-router-link';

export default {
	name: "Refuge",
	components: {Button, Box, AnchorRouterLink},
	data() {
		return {
			summaryList: [
				{
					name: 'Notre rôle',
					id: 'role',
				},
				{
					name: 'Horaires',
					id: 'hours',
				},
				{
					name: 'Nos Moyens',
					id: 'resources',
				},
				{
					name: 'Plans d\'accès',
					id: 'accessPlan',
				},
				{
					name: 'Coordonnées',
					id: 'contactDetails',
				},
			],

			scrollOptions: {
				container: "body",
				duration: 700,
				easing: "ease",
				offset: 0,
				cancelable: true,
				onStart: false,
				onDone: false,
				onCancel: false,
				x: false,
				y: true
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.refuge {

	h3 {
		font-size: calc-rem(14);
		font-weight: bold;
	}

	&--img {
		background: no-repeat center center;
		background-image: url("../../assets/refuge-vague.svg");
		background-size: cover;
		width: 100vw;
		height: 70vh;
		padding: calc-rem(70) calc-rem(10);
		margin-top: calc-rem(-30);
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h2 {
			font-size: calc-rem(22);
		}
	}

	&--summary {
		margin: 0 calc-rem(15);

		&--button {

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			a {
				flex-shrink: 3;
				flex-basis: 44vw;
			}

			.button {
				margin: calc-rem(5) calc-rem(5);
				width: 95%;
				font-size: calc-rem(13);
			}

		}
	}

	&--role {
		&--white {
			margin: calc-rem(30) calc-rem(15);
		}
	}

	&--role--brown, &--resources--brown, &--contactDetails, &--noRespect {
		overflow-x: hidden;
		&--design {
			width: 101vw;
			margin-left: -2px;
			&-top {
				transform: rotate(180deg);
				margin-bottom: -1px;
			}

			&-down{
				margin-top: -1px;
			}
		}

		&--container {
			background: $primary-brown;
			box-shadow: 0 0 2rem 2rem darken($primary-brown, 7%) inset;
			color: white;
			padding: calc-rem(20) calc-rem(30);
		}

		h2, h3 {
			color: white !important;
		}
	}

	&--resources {
		&--white {
			margin: 0 calc-rem(15);
		}

		&--brown {
			&--container {
				ul {
					list-style: '- ';

					li {
						margin-bottom: calc-rem(10);
					}
				}
			}
		}
	}

	&--contactDetails {
		h2 {
			color: white !important;
		}

		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: calc-rem(15);
			margin-bottom: 0;
		}

		p {
			margin: 0;
		}

		a{
			color: $primary-orange;
		}
	}

	&--hours {
		margin: 0 calc-rem(15);
	}

	&--accessPlan {
		margin: calc-rem(30) calc-rem(15);

		.mapouter {
			position: relative;
			height: 45vh;
			width: 100%;
			margin-top: calc-rem(20);
		}

		.gmap_canvas {
			overflow: hidden;
			background: none !important;
		}

		iframe {
			height: 45vh;
			width: 100%;
		}
	}

	ul {
		padding: 0;
		list-style: none;
		font-size: calc-rem(12) !important;

		li {
			margin: calc-rem(10) 0;
		}
	}
}
</style>
