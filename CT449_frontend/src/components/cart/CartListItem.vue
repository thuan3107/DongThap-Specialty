<template>
	<div class="shopping-cart">
		<div class="cart-left">
		 <a href="" class="img-item"><img :src="cartItem.picture" alt=""></a> 
		
		 </div>
		<div class="cart-right">
			 <h3 id="title">{{ cartItem.title }}</h3>
		 
        <div class="btn">
			<button
			
				@click="addToCart(cartItem)"
				
			>+</button>
			 {{ cartItem.quantity }}
			<button
			
				@click="removeFromCart(cartItem)"
			
			>-</button>
				</div>


				<span class="price">
				{{ cartItem.price }} .000đ
			</span>
		</div>

		
	</div>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";

export default {
	name: "CartListItem",
	props: ["cartItem"],
		
	methods: {
		...mapActions(useCartStore, ["addToCart", "removeFromCart"]),
	},
};
</script>

<style scoped>
.shopping-cart{
	display: inline-block;
	height: 120px;
	width:750px; 
	padding: 10px 0px;
     border-bottom: 1px solid #f1f1f1; 
     border-right: 1px solid #f1f1f1;
    overflow:scroll;
   
}
.cart-item--modify {
	cursor: pointer;
	margin: 0 1px;
}
button{
	/* float: left; */
    font-weight: 500;
    font-size: 14px;
    padding: 0;
    height: 25px;
    width: 25px;
    text-align: center;
    background: #f3f4f4;
    border: 1px solid #f3f4f4;
    border-radius: 0;
    outline: none;
}
.cartItem.quantity{
    border: 1px solid black;
}
.price{
	display: block;
	color: black;
	font-size: 14px;
	font-family:Arial, Helvetica, sans-serif;
	padding-left: 12px;
}
#title{
	display: inline-block;
	font-size:20px;
	margin-left: 12px;
}
.btn{
	display: block;
     padding-right: 365px;


}
.cart-left{
	display: inline-block;
	position: absolute;
	width: 90px;
	height: 80px;
    padding: 0px 10px 0 0;
    margin-bottom: 100px;
}
.cart-right{
	width: 450px;
	height: 109px;
	display: inline-block;
	margin-left: 90px;
	

}
.img-item img{
	width:80px;
	 height:80px;
	}
</style>
