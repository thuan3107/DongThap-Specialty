<template>  
             
                    <div class="product-items">
                        <div class="product-item">
                          <img :src="productItem.picture" alt="">
                         
                            <div class="product-item-text">
                              
                               <h1> <a>	{{ productItem.title }} </a></h1>
                               <h2 ><span>	{{ productItem.price }}</span>.000đ</h2>
                            </div>
                            <a class="cartadd"  @click="addToCart(productItem)" >Thêm vào giỏ hàng</a>
                        </div>
                       
                      
                        
                       </div>
                 
             
              
                   
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";

	
export default {
	name: "ProductListItem",
	props: ["productItem"],    
     
 
	methods: {
		...mapActions(useCartStore, ["addToCart"]),
	},
};
</script>

<style scoped>
.product{
    margin-top: 20px;
}

  .onsale{
  font-size: 14px;
   background-color: #ED1C24;
   padding: 5px 8px;
   font-family: Rotobo, sans-serif;
   width: 47px;
   height: 25px;
   color: white;
   display: inline-block;
   position: absolute;
   z-index: 2;
   border-radius: 4px;
   top: 10px;
  }
  .icon1{
    display: inline-block;
     position: relative;

  }
  .product-item-text h1 {
    font-family: Arial, Helvetica;
    font-size: 15px;
    color:#666;
   } 
   .product-item-text h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: #ed1c24 ;
    font-size: 16px;
    display: block;
   

   } 
   .container{
       max-width:900px;
       margin: auto;
      
       position: relative;
       height: 250px;
     
   }
   .product-items{
	display: inline-block;
     width: 250px;
	 height: 280px;
    padding: 0px;
    
   }
   .product-item{
        display: inline-block;
        background: #ccc;
        padding: 12px;
        text-align: center;
  
        box-sizing: border-box;
        margin-bottom: 25px;
        box-shadow: 1px 3px 3px 0px #0000001a; 
        border-radius: 5px;
        transition: transform linear 0.1s;
        will-change: transform;
        margin-right: 5px; 
        height:280px;
   }
   .product-item img{
       width: 80%;
       margin-bottom: 10px;
   }
   .product-item-text{
     
       display: block;
   }
   /* .product-item #cartadd{
       margin-top: 12px;
       height: 30px;
       padding: 0 8px;
       cursor: pointer;
       border: none;
      

   } */
  
   .product-item .cartadd{
       text-decoration: none;
       text-transform: uppercase;
       text-align: center;
       /* display: block; */
       cursor: pointer;
         
           color: #037540;
           padding: 10px 0px;
           position: absolute;
           width: 100%; 
           bottom: 1px; 
           left: 0px;
           transition: 0.25s ease-in-out;
           border: none;
           opacity: 100%;
           
           
   }
   .product-item:hover > .cartadd{
       bottom: 20px;
       background-color: #037540; 
       color: #fff;
       right: 0;
       left: 0;
   }

.icon1{
  display: inline-block;
   /* float: right;  */
}
.menu-img{

  z-index: 2;
  
}
  
.search-box{
    position: absolute;      
     top: 20px;
       
      transform: translateX(-100%);
     background: whitesmoke;
     /* height: 20px; */
     border-radius: 40px;
     padding: 2px; 
       height: 5  0px;
     border: 1px solid gray
 }
 .search-btn{
     color: #e84118;
       float: right; 
     width: 40px;
     height: 40px;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .search-txt{
     border:none;
     background: none;
     outline: none;
      float: left; 
      padding: 0;
      color: white;
     font-size: 16px;
     transition: 0.4s;
     line-height: 40px;
     width: 0px;

 }
 
 .search-box:hover > .search-txt{
      width: 160px;
      padding: 0 6px;
      color: black;

 }
 .search-box:hover > .search-btn{
     background: wheat;
     border-radius: 40px;

 }
 
.header-left{      
    width: 100%;
    height: 50px;
    background-color: #001C40; 
    /* position: absolute;  */
}
.header{
 
  display: inline-block;
  z-index: 2;
  width: 100%;
  height: 20px;
  
}
.header-right{
    width: 100%;
    height: 350px;
    display: flex;
    border: 3px solid gold;
}
.header-right ul{
    display: flex;
     margin: 0 0;
     padding: 0 0;

} 
.header-right ul li{
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
    

}
a.logo{
    width: 20%;
    height: 90px;
}
.logo img{
   width: 90%;
   height: 90%;
   margin-left:  15px;

}

.header .header-left ul li img{
    height: 20px;
    width: 20px;
    margin-left: 30px;
    margin-top: 12px;  
    margin-right: 10px;
    color: aqua;

}

.header .header-left  ul li a{
     text-decoration: none; 
     position: relative;
     bottom: 5px;
     color: white;
}
.header .header-left  ul{
    margin-left: 20px;
}
.header .header-left ul li{
    display: inline-block;
    margin: 0px 20px 0px 10px;
    color: white;
}
ion-icon{
    font-size: 22px;
}
.right-nav{
    width: 700px;
    display: flex; 
    justify-content: center;
    align-items: center;
}
ul.left{
 margin-top: 8px;
 margin-bottom: 0px;
 width: 50%;
 display: inline-block;
}
ul.right{
  float: right;

}
.header .header-left  ul li a{
     text-decoration: none; 
     bottom: 5px;
     color: white;
}
ul.right a.right-1{
  font-size: 16px;
  position: absolute;
  border: 1px solid gray;   
}
ul.right i{
    margin-right: 10px;
    margin: 17px 5px;
}
.header .header-left  ul{
    margin-left: 20px;
  
}
.header .header-left ul li{
    display: inline-block;
    margin: 0px 20px 0px 10px;
    color: white;
}
.nav-right {
    height: 90px;
    background: white;
    box-shadow: 0 3px 15px rgb(0 0 0 / 40%);
    display: flex;
    z-index: 3;
    width: 100%;
    position: fixed;
    top: 40px;
}
.right-nav ul{
    width: 750px;
}
.right-nav li{
     margin: 25px 25px; 
     padding-top: 20px;
}
.header-right ul li a{
    text-decoration: none;
    font-size: 16px;
    font-family: "Josefin Sans"  sans-serif;
    color: #111;
}



</style>
