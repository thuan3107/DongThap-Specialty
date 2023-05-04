<template>
	<nav class="navbar navbar-expand navbar-dark color-head">
		
		 <!-- <a href="/" class="navbar-brand">66 SPECIALTY</a> -->
		<img src="https://theme.hstatic.net/200000348893/1000847181/14/logo.png?v=198" alt="logo" class="navbar-brand" >

		

		<div v-if="!currentUser" class="navbar-nav ml-auto">
			<li class="nav-item">
				<router-link :to="{ name: 'register' }" class="nav-link"
					>Đăng ký </router-link
				>
			</li>
			
			<li class="nav-item">
				<router-link :to="{ name: 'login' }" class="nav-link"
					>Đăng nhập</router-link
				>
			</li>
		</div>
		

		<div v-if="currentUser" class="navbar-nav ml-auto">
			<li class="nav-item">
				<router-link :to="{ name: 'navbar' }" class="nav-link">{{
					currentUser.username
				}}</router-link>
			</li>
			<li class="nav-item">
				<a class="nav-link" @click.prevent="handleLogout">Đăng xuất</a>
			</li>
		</div>
		
	</nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
	computed: {
		...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	methods: {
		...mapActions(useAuthStore, ["logout", "loadAuthState"]),

		handleLogout() {
			this.logout();
			this.$router.push({ name: "login" });
		},
	},
	created() {
		this.loadAuthState();
	},
};
</script>


<style scoped>
.navbar{
	height: 60px;
    
}
.nav-link{
	font-size: 20px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.navbar-brand{
	
	width: 30%;
  	height: 100%;
	object-fit: contain; 
}

.color-head{
	background-color: #008848;
}

.navbar-nav.ml-auto {
	
	padding-right: 80px;
}
</style>
