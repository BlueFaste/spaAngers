<template>
	<div class="filters">
		<Button text="Filtres" ticTac="left" color="beige" @click="showFilter = !showFilter"></Button>
		<box background="beige" tic-tac="left" class="filters--filter" v-show="showFilter">
			<template v-slot:content>
				<h3>Filtres</h3>
				<Button v-for="(filter, key) in filters" :text="filter.name" :key="key" tic-tac="left" color="brown"
						:icon="true" :icon-check="filter.check" @click="filterCheck(key)"></Button>
			</template>
		</box>

	</div>
</template>

<script>
import box from "../box/box";
import Button from "../button/button";

export default {
	name: "filters",
	components: {Button, box},
	props: {
		filters: Array,
	},
	data() {
		return {
			showFilter: false,
		}
	},
	methods: {
		filterCheck(key) {
			this.$emit('filterCheck', key)
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";

.filters {
	position: relative;
	.button {
		color: $primary-brown;
	}

	&--filter {
		position: absolute;
		right: 0;
		top: calc-rem(35);
		display: flex;
		flex-direction: column;
		align-items: center;
		background: $primary-beige;

		.button {
			margin: calc-rem(2) 0;
			width: calc-rem(110);

		}

	}

}

</style>
