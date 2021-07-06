<template>
<section class="FAQ">
	<h2>Foire aux questions</h2>
	<article>
		<ToggleDeroulant v-for="(question, key) in questionArray" :key="key" :text="question" :id="key"></ToggleDeroulant>
	</article>

</section>
</template>

<script>
import ToggleDeroulant from "../../components/toggleDeroulant/ToggleDeroulant";
export default {
	name: "FAQ",
	components: {ToggleDeroulant},
	data(){
		return{
			questionArray:[
				{
					title: 'D\'où viennent les animaux présents au refuge ?',
					textArray: [
							'Que ce soit chien ou chat, la grande majorité de nos animaux sont des animaux trouvés errants.',
							'Les autres sont des animaux abandonnés par leurs propriétaires.',
					]
				},
				{
					title: 'Que devient un animal entrant au refuge ?',
					textArray: [
						'Un chien ou un chat trouvé passe 8 jours ouvrés dans la partie fourrière du refuge. Ce délai légal permet à un propriétaire éventuel de venir réclamer son animal.',
						'A l\'issu de ce délai, l\'animal est proposé à l\'adoption après une visite chez le vétérinaire (identification, vaccin, consultation, les chats sont dépistés pour la leucose et le FIV).',
					]
				},
				{
					title: 'Pourquoi dois-je payer pour récupérer mon animal ?',
					textArray: [
						'Suite à la perte de votre animal, celui-ci a pu être récupéré par le refuge. Durant le délai légal de fourrière, il est identifié s\'il ne l\'était pas (obligation légale pour les chiens et les chats), vacciné (pour éviter la propagation de maladie) et dépisté FIV/leucose pour les chats.\n',
						'Il est également bien sûr nourri.',
						'Toutes ces opérations ont un coût et c\'est pour cela que nous vous demandons une participation aux frais quand vous venez chercher votre compagnon.',
					]
				},
				{
					title: 'Pourquoi beaucoup de chats sont-ils malades au refuge ?',
					textArray: [
						'Au refuge, les chats vivent en collectivité (et donc les virus aussi !), ce mode de vie n\'étant pas naturel pour eux, il provoque malheureusement un stress important (malgré tous les soins apportés par les salariés et les bénévoles).',
						'Stressés et affaiblis, ils sont une cible idéale pour les virus ambiants, notamment le coryza. Soignés et chouchoutés à l\'infirmerie, les chats guérissent en général en une dizaine de jours. Immunisés ensuite contre les virus présents en chatterie, ils passent le reste de leur séjour tranquillement (ils préféreront bien évidemment trouver des adoptants !)',
					]
				},
				{
					title: 'Mon propriétaire peut-il m\'interdire d\'avoir un animal dans mon logement ?',
					textArray: [
						'L\'article 10 de la loi n°70-598 du 9 juillet 1970 reconnait à chacun le droit de posséder un animal (ou plusieurs) dans un local d\'habitation. La clause d\'un contrat de location qui stipulerait que le locataire ne peut avoir d\'animal domestique chez lui ne serait pas légale, donc nulle. De même, serait nulle la clause d\'un règlement de copropriété qui interdirait la possession d\'un animal de compagnie dans un appartement.',
						'Mais il existe une exception notable à cette règle : depuis la loi du 6 janvier 1999, un contrat de location ou un règlement de copropriété peut valablement prévoir l\'interdiction de détenir un chien de 1ère catégorie.',
						'Si vous désirez avoir un animal dans votre logement, trois conditions doivent être remplies (Loi n°70-598 du 9 juillet 1970, art. 10) :',
						'- il doit s\'agir d\'un animal familier ; il ne doit pas appartenir à une espèce protégée.',
						'- l\'animal ne doit causer aucun "trouble de jouissance" aux occupants de l\'immeuble, c\'est à dire qu\'il ne doit pas déranger les voisins (pas de bruits, mauvaises odeurs...).',
						'- l\'animal ne doit causer aucun dégât à l\'intérieur du logement ou dans les parties communes.',
					]
				},
				{
					title: 'Est-il vraiment obligatoire d\'identifier son animal ?',
					textArray: [
						'L\'identification est obligatoire pour tous les chiens âgés de plus de 4 mois et nés après le 6 janvier 1999, ainsi que pour tous les chats de plus de 7 mois nés après le 1er janvier 2012.',
						'En dehors du côté légal, identifier votre animal vous permet de le retrouver beaucoup plus facilement si vous le perdez.',
					]
				},
				{
					title: 'Que faire si je trouve un animal ?',
					textArray: [
						'Première chose à faire, regardez autour de vous si vous ne voyez pas son propriétaire ! Faite le tour du voisinage, peut-être s\'est-il juste échappé du jardin d\'à côté.',
						'Vérifiez ensuite si l\'animal est identifié : par tatouage (visible immédiatement dans l\'oreille ou la cuisse) ou par puce électronique (détectable à l\'aide d\'un lecteur possédé par les vétérinaires, les refuges…). Vous pouvez le conduire chez un vétérinaire qui vérifiera gratuitement s\'il est identifié et vous communiquera les coordonnées du propriétaire.',
						'Si l\'animal n\'est pas identifié, contactez la mairie de la commune où vous avez trouvé l\'animal. Elle vous renseignera sur la marche à suivre. Certaines communes ont passé une convention avec la SPA de Millau qui récupère alors l\'animal.',
						'Pour les autres communes, c\'est au maire de recueillir les animaux errants sur son territoire.',
					]
				},
				{
					title: 'Que faire si je perds mon animal ?',
					textArray: [
						'Contactez les refuges alentours pour signaler sa disparition.\n',
						'Contactez également les communes alentours, la gendarmerie ou le commissariat de votre quartier, les vétérinaires, les commerces à proximité de votre domicile (laissez des annonces avec photo).',
						'Si votre animal est identifié par tatouage ou par puce électronique, informez  l\'I-CAD (Identification des Carnivores Domestiques), toutes les informations sur leur site http://www.i-cad.fr',
					]
				},
				{
					title: 'Pourquoi  je n\'arrive pas à vous joindre par téléphone pendant les horaires d\'ouverture ?',
					textArray: [
						'Si vous n\'arrivez pas à nous joindre, c\'est probablement parce que nous sommes dans l\'impossibilité de répondre au téléphone (le refuge est grand et la portée du téléphone a ses limites…) ou parce que nous sommes déjà en ligne ou encore parce que nous sommes occupés avec les animaux.',
						'Soyez patients et n\'hésitez pas à renouveler votre appel ou à laisser un message (nous vous rappellerons rapidement).',
					]
				},
				{
					title: 'Pourquoi tous les animaux du refuge sont-ils stérilisés et castrés ?',
					textArray: [
						'Actuellement en France, l\'offre concernant les animaux de compagnie est beaucoup plus grande que la demande. Résultat, un nombre important de chiens et chats se retrouvent sans propriétaire.',
						'Propriétaires dépassés essayant vainement de donner les nombreux rejetons de la portée de leur compagnon, prolifération des nombreux chats laissés à l\'abandon dans la rue, supermarché vendant des chiots et chatons comme des produits ménagers, éleveurs peu scrupuleux faisant naitre de nombreuses portées par an … Les exemples fleurissent et ne manquent pas.',
						'Alors que les refuges sont saturés de tous ces animaux délaissés, la stérilisation est un remède efficace pour combattre la misère animale.',
					]
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.FAQ{
	margin: calc-rem($margin-top) calc-rem($margin-border) calc-rem($margin-bottom) calc-rem($margin-border);

	h2{
		margin-bottom: calc-rem(10) !important;
	}
}

</style>
