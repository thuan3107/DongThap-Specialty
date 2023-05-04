import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/components/Home.vue";
import UserLogin from "@/views/UserLogin.vue";
import Navbar from "@/components/Navbar.vue";
import ProductList from "@/components/product/ProductList.vue";

import Footer from "@/components/Footer.vue";
import CartList from "@/components/cart/CartList.vue";
import ContactAdd from "@/views/ContactAdd.vue";
import Dialog from "@/views/Dialog.vue";
 import { useAuthStore } from "@/stores/auth.store";

 const redirectIfLoggedIn = (_to, _from) => {
	if (useAuthStore().isUserLoggedIn) {
		return {
			name: "profile",
		};
	}
};

const routes = [
	{
	  	path: "/contact",
	 	name: "contactbook",
	  	component: () => import("@/views/ContactBook.vue"),
	  },
	
	{
		path: "/cart",
		name: "CartList",
		meta: {
			publicPage: true,
		},
		component: () => import("@/components/cart/CartList.vue"),
	},
	{
		path: "/blog",
		name: "blog",
		meta: {
			publicPage: true,
		},
		component: () => import("@/views/blog.vue"),
	},
	{
		path: "/introduce",
		name: "introduce",
		meta: {
			publicPage: true,
		},
		component: () => import("@/views/Introduce.vue"),
	},
	{
		path: "/products",
		name: "ProductList",
		meta: {
			publicPage: true,
		},
		component: () => import("@/components/product/ProductList.vue"),
	},
	
	{
		path: "/login",
		name: "login",
		component: UserLogin,
		meta: {
			publicPage: true,
		},
		
		beforeEnter: redirectIfLoggedIn,
	},
	{
		path: "/Footer",
		name: "Footer",
		  meta: {
		   	publicPage: true,
		   },
		component: Footer
	},
	
	{
		path: "/",
		name: "navbar",
		  meta: {
		   	publicPage: true,
		   },
		   components: { default: ProductList, 'Footer': Footer}
	},
	{
		path: "/register",
		name: "register",
		component: () => import("@/views/UserRegister.vue"),
		meta: {
			publicPage: true,
		},
		beforeEnter: redirectIfLoggedIn,
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("@/views/UserProfile.vue"),
	},
	{
		path: "/dialog",
		name: "dialog",
		meta: {
			publicPage: true,
		},
		component: () => import("@/views/Dialog.vue"),
	},
	{
		path: "/contacts/:id",
		name: "contact.edit",
		component: ContactAdd
	},
	{
		path: "/add",
		name: "add",
		meta: {
			publicPage: true,
		},
		component: () => import("@/views/ContactAdd.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, _from) => {
	const authRequired = !to.meta.publicPage;
	const auth = useAuthStore();

	if (authRequired && !auth.isUserLoggedIn) {
		const query = to.fullPath === "/" ? {} : { redirect: to.fullPath };
		return {
			name: "Navbar",
			query,
		};
	}
});

export default router;
