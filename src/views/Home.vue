<template>
  <div class="home">

		<Button text="long text for test"></Button>
		<Button text="medium texte"></Button>
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
