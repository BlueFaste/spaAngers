<template>
	<div class="home">

		<Button text="long text for test" ticTac="rigth"></Button>
		<Button text="medium texte" ticTac="left"></Button>
		<Button text="st"></Button>
	</div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/button/button";

export default {
	name: 'Home',
	components: {
		Button,
	}
}
</script>

<style lang="scss">

</style>
