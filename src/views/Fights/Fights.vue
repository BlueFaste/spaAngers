<template>
	<section class="fights">
		<article class="fights--actions">
			<h2>Nos actions</h2>
			<p> Nos actions de la SPAA d'ANGERS ne se limitent pas seulement au sauvetage des chiens et des chats. Notre association intervient aussi auprès des propriétaires d'animaux maltraités (voir dans l'album photo le sujet sur les vaches), elle travaille en étroite collaboration avec la gendarmerie nationale, les polices nationales et municipales et les sapeurs pompiers qui peuvent à toute heure du jour et de la nuit, nous amener un animal recueilli sur la voie publique, que ce soit un animal de compagnie (chien, chat.......) ou un animal exotique (serpent, iguane, perroquet, singe......).</p>
			<p>Elle participe à l'intégration des chats libres dans l'environnement des quartiers par l'aménagement de "cha'bitat" (voir belle beille).</p>
			<p>Elle travaille en partenariat avec la majorité des communes du département via les conventions de coopération dites conventions de fourrière pour recueillir les animaux errants sur la voie publique.</p>
			<p>Dans la mesure de ses moyens, elle participe aussi à des actions d'information et de sensibilisation sur le thème de la protection animale dans les différents milieux scolaires et auprès du public en général.</p>
		</article>
		<article class="fights--projects">
			<h2>Nos projets</h2>
			<p>Plusieurs projets vont voir le jour au cours de l'année 2009. Ils sont ambitieux mais pas irréalisables avec la ferveur de nos adhérents, délégués et administrateurs.</p>
			<ul>
				<li>1) Le principal projet est l'agrandissement des locaux.</li>
				<li>2) Sensibilisation des jeunes (acteurs de demain) via des interventions directes auprès des scolaires.</li>
				<li>3) Amélioration des conditions d'hébergement de nos pensionnaires.</li>
				<li>4) Organisation de sortie des chiens de leur box vers des aires de détente avec les délégués dans un  premier temps et des bénévoles à terme.</li>
				<li>5) Embellissement du site grâce à des plantes, fleurs, rafraîchissement des locaux, box et chaterie, toutes vos suggestions sont les bienvenues.</li>
				<li>6) Développement des actions de partenariats avec les collectivités locales, collèges...</li>
			</ul>
			<p>Un point sera fait chaque trimestre pour suivre les projets et en faire le bilan.</p>
			<p>Comme vous le constatez, nous ne manquons pas d'idées mais plutôt de bonne volonté. </p>
			<p>Donc n'hésitez pas à <router-link to="/contact">nous contacter.</router-link></p>
		</article>
	</section>
</template>

<script>
export default {
	name: "Fights"
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.fights{
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	&--actions{
		margin-bottom: calc-rem(50);
	}

	h2{
		margin-bottom: calc-rem(10) !important;
	}

	ul{
		list-style: none;
		padding: 0;
		li{
			margin: calc-rem(10) 0;
			font-weight: bold;
		}
	}

	a{
		color: $primary-orange;
		text-decoration: underline !important;
	}

}

</style>
