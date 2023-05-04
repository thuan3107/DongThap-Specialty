import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state() {
		return {
			products: [],
		};
	},
	getters: {
		productCount: (state) => state.products.length,
	},
	actions: {
		fetchProducts() {
			axios.get("/api/products").then((response) => {
				this.products = response.data;
			});
		},
		fetchProducts() {
			axios.get("/api/products/title").then((response) => {
				this.products = response.data;
			});
		},
	},
});
