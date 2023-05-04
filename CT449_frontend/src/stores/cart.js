import axios from "axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state() {
		return {
			cartItems: [],
		};
	},
	getters: {
		cartTotal: (state) => {
			return state.cartItems
				.reduce((total, item) => {
					return total + item.price * item.quantity;
				}, 0)
				.toFixed(2);
		},
		cartQuantity: (state) => {
			return state.cartItems.reduce((total, item) => {
				return total + item.quantity;
			}, 0);
		},
	},
	actions: {
		fetchCartItems() {
			axios.get("/api/cart").then((response) => {
				this.cartItems = response.data;
			});
		},
		addToCart(product) {
			axios.post("/api/cart", product).then((response) => {
				this.cartItems = response.data;
			});
		},
		removeFromCart(product) {
			axios.post("/api/cart/delete", product).then((response) => {
				this.cartItems = response.data;
			});
		},
		removeAllCartItems() {
			axios.post("/api/cart/delete/all").then((response) => {
				this.cartItems = response.data;
			});
		},
	},
});
