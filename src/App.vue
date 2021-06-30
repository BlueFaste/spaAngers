<template>
  <div id="app">
		<Header></Header>
    <router-view/>
  </div>
</template>

<script>

import Header from "./components/header/header";
export default {
	name: 'App',
	components: {
		Header
	}
}
</script>
<style lang="scss">

@import 'src/styles/variables';
#app {
  font-family: $font-family-base !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;

	h1{
		font-weight: bold;
	}
}

#nav {
  padding: 30px;
	a{
		text-decoration: none;
		color: $primary-orange;
	}
}
</style>
