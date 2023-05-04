<template>
	<div id="cart">
		<div class="cart-header has-text-centered">
			<h3>Giỏ hàng của bạn</h3>
			
		</div>
		<br>
		<div class="cartlist">
		<p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
		
			<img src="@/assets/images/not-allowed.png" alt="">
				Giỏ hàng của bạn đang trống!

		</p>
	
		<ul v-if="cartItems.length > 0">
			<li
				v-for="cartItem in cartItems"
				:key="cartItem.id"
				class="cart-item"
			>
				<CartListItem :cartItem="cartItem" />
			</li>
			 <div class="cart-details">
				 <p>
					Số lượng:
					<span class="has-text-weight-bold">{{ cartQuantity }}</span>
				</p> 
				<p @click="removeAllCartItems" class="cart-remove-all--text">
					<i class="fa fa-trash"></i>Xóa tất cả
				</p>
			</div> 
		</ul>
		</div>
		<div class="payment">
					<h2>Thông tin đơn hàng</h2>
					<div class="sumary" >
						<p>
						Tổng tiền:
						<span style="font-weight: bold;float: right;color: red; font-size: 24px;">{{ cartTotal }}0đ</span>
                    </p>
                     <!-- <div v-if="currentUser" class="navbar-nav ml-auto">
							<li class="nav-item">
								<router-link :to="{ name: 'profile' }" class="nav-link">{{
									currentUser.username
								}}</router-link>
							</li>
							<li class="nav-item">
								<a class="nav-link" @click.prevent="handleLogout">Đăng xuất</a>
							</li>
				 	</div> -->
		           
						 <div  v-if="currentUser"> 
							 <router-link to="/add"> 
								 <button  :disabled="!cartItems.length" class="check-btn">
								   
									Thanh toán 
								</button>
								</router-link>
						
			
                     </div>   
				     <div  v-if="!currentUser"> 
							
							{{message}}
						
                     </div>   


				     
				</div>
			

		</div>
		
		<div class="buy" >
	     	<router-link to="/" style="text-decoration: none; color: inherit">	
		    <button class="btn1">Tiếp tục mua hàng</button>
		    </router-link>
		</div>
		

	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";
 
import CartListItem from "./CartListItem.vue";
import { useAuthStore } from "@/stores/auth.store";


export default {
	name: "CartList",
   
	components: {
		
		CartListItem,
	},
	watch: {
           message: "Bạn phải đăng nhập"
	},

	computed: {
		...mapState(useCartStore, ["cartItems", "cartQuantity", "cartTotal"]),
			...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	methods: {
		 ...mapActions(useCartStore, ["fetchCartItems", "removeAllCartItems"]),
        handleSubmit () {
              console.log("You clicked the button!");
            if(currentUser){

			}
			
			}
      


		
	},
	created() {
		this.fetchCartItems();
		if (!this.currentUser) {
			this.$router.push({ name: "login" });
		}
	},
};
</script>
<style scoped>
#cart {
 
    height: auto;
	padding: 30px 10px;
	width: 1070px;
	/* padding: 10px 0px; */
    border-bottom: 1px solid  red;  
	margin-left: 100px;
}
.cartlist{
	width:650px;
	/* border:2px solid red; */

	
}
.cartlist img{
	width: 200px;
	height: 200px;
}
ul{
	width: 400px;
}
h3{
	color: #000000;
    margin: 0 auto;
    font-weight: 700;
    line-height: 1.2;
	font-size:27px;
	
}
.payment{
    padding: 15px;
     
    position: absolute;  
	width:350px;
    right: 150px;
	top: 110px;
    
}
.payment h2{
	font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
}
.btn1{
	display: block;
	width: 50%;
	margin: 0px auto;
	text-align: center;
	border-radius:4px ;
	padding: 10px 15px;
	color: #000000;
	background:whitesmoke;
	font-weight: 17px;
	text-transform: uppercase;
	
}
.buy{
    border-top: 1px solid #ebecf0;
	 text-decoration: none;
}
 .buy :hover{

	border: 1px solid blue;
	color: blue;
	
}
.check-btn{
	width: 328px;
	height: 45px;
	display: block;
    background: red;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 5px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    border-radius: 0;	
	border: none;
}
.cart-empty-text {
	padding: 10px 0;
}

.cart-header {
	/* border-bottom: 1px solid #e8e8e8; */
	/* padding-bottom: 15px; */

	height: 60px;
	display: block;
     	
}
.sumary{
	font-size: 16px;
    padding-bottom: 10px;
    border-top: 1px dotted #dfe0e1;
    padding-top: 15px;
    font-weight: bold;
}
.cart-item {
	padding: 10px 0;
	display: inline-block;
}

.cart-details {
	font-size: 15px;
	display: flex;
	justify-content: space-between;
	padding: 15px;
}

.cart-remove-all--text {
	cursor: pointer;
}

.cart-remove-all--text .fa {
	padding-right: 5px;
}
</style>
