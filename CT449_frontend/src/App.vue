<script>
import AppHeader from "@/components/AppHeader.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
    AppHeader,
    Navbar,
    Footer,
	
},

computed: {
    
    productName() {
      return this.$route.query.name;
    }
  }


};
</script>

<template>
	<div id="app">
		<AppHeader />
		<Navbar /> 
	     {{this.$route.query.name}}
		 <div class="container mt-3">
		
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<style>
.page {
	max-width: 400px;
	margin: auto;
}

.swal2-popup {
	padding: 0 0 1rem 0;
}

.swal2-close {
	padding: 0;
}

.swal2-popup.swal2-toast .swal2-title {
	margin: 1rem 1rem 0 1rem;
}

.swal2-popup.swal2-toast .swal2-html-container {
	margin: 1rem;
}
.container.mt-3{
    height: auto;
	margin-right: 350px; 
    max-width: 2050px ;
}
</style>
