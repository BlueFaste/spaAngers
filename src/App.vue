<template>
  <div id="app">
		<Header></Header>
    <router-view/>
		<Footer></Footer>
  </div>
</template>

<script>

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
export default {
	name: 'App',
	components: {
		Footer,
		Header
	}
}
</script>
<style lang="scss">

@import "styles/variables";
@import "styles/mixims";
@import "styles/functions";
#app {
  font-family: $font-family-base !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;

	h1{
		font-weight: bold;
	}

	h2{
		font-size: calc-rem(20);
		margin: 0;
		font-weight: bold;
		text-transform: uppercase;
		color: $primary-brown;
	}

	p{
		font-size: 14px;
	};

	a{
		text-decoration: none;
	}
}

#nav {
  padding: 30px;
	a{
		color: $primary-orange;
	}
}
</style>
