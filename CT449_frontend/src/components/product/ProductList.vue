<template>
<div class="product1">
	 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="//theme.hstatic.net/200000348893/1000847181/14/slide_1_img.jpg?v=198" class="d-block w-100" alt="#">
              </div>
              <div class="carousel-item">
                <img src="//theme.hstatic.net/200000348893/1000847181/14/slide_2_img.jpg?v=198" class="d-block w-100" alt="#">
              </div>
              <div class="carousel-item">
                <img src="//theme.hstatic.net/200000348893/1000847181/14/slide_4_img.jpg?v=198" class="d-block w-100" alt="#">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div> 
	<div id="products">
		<div class="products--header has-text-centered">
			<p class="htitle">	
				XOÀI NÀO NGON BẰNG XOÀI CAO LÃNH
			</p>
		</div>
		<div class="product-list">
			<div
				v-for="productItem in productItems"
				:key="productItem.id"
				class="product-list--item"
			>
				<ProductListItem :productItem="productItem" />
			</div>
		</div>
	
	</div>
</div>	
</template>

<script>
import { useProductStore } from "@/stores/product";
import ProductListItem from "./ProductListItem.vue";

export default {
	name: "ProductList",
	components: {
		ProductListItem,
	},
	setup() {
		const productStore = useProductStore();
		return { productStore };
	},
	computed: {
		productItems() {
			return this.productStore.products;
		},
	},
	created() {
		this.productStore.fetchProducts();
	},
};
</script>

<style scoped>

#products {
	margin-top: 50px;
}
.htitle {
    font-size: 24px;
    margin: 0 0 8px;
    font-weight: 600;
    color: #ffffff;
    display: inline-block;
    min-width: 70%;
    background: #037540;
    box-shadow: 0px 0px 0px 2px rgba(0, 136, 72, 0.8);
    padding: 8px 15px 10px;
    border-radius: 50px;
}

.tag {
	cursor: pointer;
}
.product1{
	
	width: 1450px;
	margin-right: 10px;
	
}
.products--header {
	border-bottom: 1px solid #e8e8e8;
	padding-bottom: 15px;
}

#carouselExampleIndicators{

width: 1450px;

display: inline-block; 
transition-duration: 0.1s;   
height: 500px;



}
.carousel-inner img{
     width: 800px; 
     height: 500px;
 	 object-fit: contain;



}

.carousel-control-next{
position: absolute;
top: 0px;
bottom: 0px;
font-size: 300px;


}
.carousel-control-prev{
position: absolute;
top: 0px;
bottom: 0px;
}
.carousel-slide{
    height: 470px;


}
.product-list {
	padding-top: 10px;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;

}
h3{
    font-size: 25px;
	
}

#products {

	width: 100%;
	height: 100%;	
	position:relative;
} 
.product-list--item {
	padding: 10px 0px;
    width:300px;
}
</style>
