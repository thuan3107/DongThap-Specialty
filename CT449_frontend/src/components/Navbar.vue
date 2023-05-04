<template>
 <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light1">
  <div class="container-fluid">
    <router-link to="/">
    <!-- <a class="navbar-brand" href="#">
      <img src="@/assets/images/logorun.png" alt="">
    </a> -->
  </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/"><a class="nav-link active" aria-current="page" href="#" style="color: #037540;">Trang chủ</a></router-link>  
        </li>

       <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Sản Phẩm
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Sản phẩm của Grandsport</a></li>
        
          
          </ul>
        </li> -->

         <li class="nav-item">
           <router-link to="/blog">
          <a class="nav-link" href="#">Tin tức</a>
        </router-link>
        </li>
        <router-link to="/introduce" style="text-decoration: none; color: inherit">
        <li class="nav-item">
          <a class="nav-link lh">Liên Hệ</a>
        </li>
        </router-link>
      </ul>
      
    </div>
    <div class="menu">
                  <div class="search-box">
                   
                        <input type="text" placeholder="Tìm kiếm" class="search-txt">
                        <a href="#" class="search-btn">
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                      
                </div>
                       
                    <div class="menu-img">
                    
                        <div class="icon1 ">
                          <router-link to="/cart">
                          <img src="@/assets/images/shopping-cart.png" alt="" class="shopcart"  id="shopcart" >
                             <span class="productItem">{{ cartQuantity }}</span>
                             </router-link>
                        
                        
                        </div>
                        
                           <div class="icon1">
                          <a href="/login"><img src="@/assets/images/user.png" alt="" ></a>
                        
                        </div>
                     </div>
                </div>
     
      </div>
</nav>
  </div> 
   
      
</template>

<script>

import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";


export default {
	name: "Navbar.vue",

	computed: {
		...mapState(useCartStore, [ "cartQuantity"]),
	},
}
</script>

<style scoped>
.productItem{
   
    background: tomato;
    display: inline-block;
    vertical-align: top;
    color: #fff;
    
    text-align: center;
    position: absolute;
    left:50px;
    top: 15px;
    padding: 0px 3px;
    min-width: 20px;
    height: 20px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    
}
.dropdown-menu{
  width: 250px;
  height: 70px;

}
a.dropdown-item[data-v-41458b80]{
  
   /* border: 2px solid red; */
     font-size: 15px ;
}

 .navbar{
     background-color:white;
     height: 90px;
     box-shadow: 0 3px 15px rgb(0 0 0 / 40%);
     z-index: 1;
     width: 100%;
      
}

  ul.navbar-nav{
    width: 850px;
    display: flex;
    justify-content: right;
    align-content: center;
   }

   .d-flex {
     display: inline-block;
   }
  
  
 ul.navbar-nav li.nav-item a{
    display: block;
    /* color: red; */
    font-size: 18px !important;
    padding: 0 auto ;
    transition: .5s;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 5px;

       
 }
 .menu{
 
   height: 80px;
   /* border:1px solid red; */
   padding-right: 30px;
   
 }
.menu-img .icon1 img{
    width: 25px;
    height: 25px;
  margin-left: 30px;    
    line-height: 10px;
    margin-top: 25px;
   
    
}

 .navbar{
     background-color:white;
     height: 90px;

    
   }
   .navbar-brand img{
     width: 100px;
     height: 90px;
   }
 
   .navbar-expand-lg .navbar-collapse{
      display: flex;
     
      justify-content: center;
         
   }
   .d-flex {
  
     display: inline-block;
     
   }
  
 ul.navbar-nav li.nav-item a{
    display: block;

    padding: 0 15px;
    line-height: 70px;
    font-size: 20px;
    transition: .5s;
    text-decoration: none;
    word-spacing: 5px;
    margin-left: 5px;
    
 }
 
 .nav-item .nav-link {
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    color: #057541;
 }


 ul.navbar-nav li.nav-item{
     word-spacing: 55px;
     
 }
 .menu{
   width: 200px;
   height: 80px;
   /* border:1px solid red; */
   padding-right: 30px;
   
 }
.menu-img .icon1 img{
    width: 25px;
    height: 25px;
  margin-left: 30px;    
    line-height: 10px;
    margin-top: 25px;
   
    
}
.icon1{
  display: inline-block;
  padding: 0 5px;
   /* float: right;  */
}
.menu-img{

  z-index: 2;
  
}

 .search-btn{
     color: #057541;
     right: 55%;
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
#title{
    border: 3px solid red;
   display: inline-block;
    margin-left: 45%;
    margin-bottom: 100px;
    margin-top: 100px;
    font-size: 20px ;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    

}
.product{
    margin-top: 20px;
}

  section{
    background: url(bg.jpeg);
    background-position: center;
    background-size: cover;
    height: 30px;
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
    color:#666666;
   } 
   .product-item-text h2 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    color: #666666;
    display: block;
   

   } 
   .container{
       max-width: 1300px;
       margin: auto;
       /* border: 2px solid red; */
       position: relative;
       height: 900px;
     
   }
   .product-items{
       display: flex;
       justify-content: space-between;
       padding: 0px;
       position: relative;
      
   }
   .product-item{
       width: 100%;
       background: #fff;
       padding: 12px;
       text-align: center;
      
       position: relative;
        
           flex-basis: 20%; 
           padding-left: 15px;
           /* padding-right: 15px; */
           box-sizing: border-box;
           margin-bottom: 25px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); 
           /* color: #555; */
           border-radius: 2px;
       
          transition: transform linear 0.1s;
           will-change: transform;
           margin-right: 5px; 
   }
   .product-item img{
       width: 100%;
       margin-bottom: 20px;
   }
   .product-item-text{
       /* display:  flex; */
       /* justify-content: space-between; */
       display: block;
   }
   /* .product-item #cartadd{
       margin-top: 12px;
       height: 30px;
       padding: 0 8px;
       cursor: pointer;
       border: none;
      

   } */

   .nav-item .nav-link.lh {
      margin-left: 25px;
   }
  
   .product-item .cartadd{
       text-decoration: none;
       text-transform: uppercase;
       text-align: center;
       /* display: block; */
       cursor: pointer;
         
           color: #fff;
           padding: 10px 0px;
           position: absolute;
           width: 100%; 
           bottom: 46px; 
           transition: 0.25s ease-in-out;
           border: none;
           opacity: 80%;
           
           
   }
   .product-item:hover > .cartadd{
       bottom: 50px;
       background-color: #ED1C24; 
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
       
     border: 1px solid gray
 }
 .search-btn{
     color: #057541;
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