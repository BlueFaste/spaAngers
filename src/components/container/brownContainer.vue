<template>
	<section>
		<img :src="require('@/assets/brown-wave.svg')" alt=""
				class="design design-top">
		<article class="content">
			<slot name="content"></slot>
		</article>
		<img :src="require('@/assets/brown-wave.svg')" alt=""
				class="design brownContainer--design-bottom">
	</section>

</template>

<script>
export default {
	name: "brownContainer"
}
</script>

<style scoped lang="scss">

@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";


.design {
	width: 100vw;

	&-top {
		-webkit-transform: scaleY(-1) scaleX(-1);
		transform: scaleY(-1) scaleX(-1);
		margin-bottom: -1px;
	}

	&-bottom {
		margin-top: -1px;
	}
}

.content {
	background: $primary-brown;
	box-shadow: 0 0 2rem 2rem darken($primary-brown, 7%) inset;
	color: white;
	padding: calc-rem(20) calc-rem($margin-border);
}


</style>
