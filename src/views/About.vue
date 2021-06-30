<template>
	<div class="home">

		<Button text="long text for test" ticTac="rigth"></Button>
		<Button text="medium texte" ticTac="left"></Button>
		<Button text="st"></Button>

		<box background="beige" tic-tac="rigth" size="50">
			<template v-slot:content>
				<h1>Le refuge</h1>
				<p>Découvrez notre refuge en cliquant ci-dessous</p>
			</template>
		</box>
		<box background="orange" tic-tac="left" size="100">
			<template v-slot:content>
				<h3>Les actialités du moins de juin 2021</h3>
			</template>
		</box>
	</div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/button/button";
import Box from "../components/box/box";

export default {
	name: 'About',
	components: {
		Box,
		Button,
	}
}
</script>

<style lang="scss">
.home {
	background-image: url("https://cdn.pixabay.com/photo/2019/06/06/20/16/cat-4256821_1280.jpg");
}
</style>
