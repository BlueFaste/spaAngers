<template>
	<div class="backTop" @click="backToTop">
		<img :src="require('@/assets/chevron-backTop.svg')" alt="">
	</div>

</template>

<script>
export default {
	name: "backTop",
	methods:{
		backToTop(){
			window.scroll(0,0)
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/variables';
@import "src/styles/functions";
@import "src/styles/mixims";
.backTop{
	position: fixed;
	bottom: 3vh;
	right: 5vw;
	background-color: $primary-orange;
	width: calc-rem(40);
	height: calc-rem(40);
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	cursor: pointer;
}

</style>
