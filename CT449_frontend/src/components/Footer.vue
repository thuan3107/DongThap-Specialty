<template>
  <footer>
     <div class="container">
         <!--Bắt Đầu Nội Dung Giới Thiệu-->
         <div class="noi-dung about">
             <h2>Về Chúng Tôi</h2>
             <p>Chuyên kinh doanh các sản phẩm: OCOP Đồng Tháp, Sản phẩm nông nghiệp nông thôn tiêu biểu, sản phẩm đạt chuẩn HVNCLC và các sản phẩm đặc sản địa phương, sản phẩm làng nghề truyền thống.</p>
             <ul class="social-icon">
                 <li><a href=""><img src="@/assets/images/facebook.png" alt=""></a></li>
                 <li><a href=""><img src="@/assets/images/youtube.png" alt=""></a></li>
                 <li><a href=""><img src="@/assets/images/gmail.png" alt=""></a></li>
                 <li><a href=""><img src="@/assets/images/twitter.png" alt=""></a></li>
             </ul>
         </div>
         <!--Kết Thúc Nội Dung Giới Thiệu-->
         <!--Bắt Đầu Nội Dung Đường Dẫn-->
         <div class="noi-dung links">
             <h2 style="padding-left: 1rem;">Danh mục</h2>
             <ul>
                 <li><a href="#">Trang Chủ</a></li>
                 <li><a href="#">Về Chúng Tôi</a></li>
                 <li><a href="#">Thông Tin Liên Lạc</a></li>
                 <li><a href="#">Dịch Vụ</a></li>
                 <li><a href="#">Điều Kiện Chính Sách</a></li>
             </ul>
         </div>
         <!--Kết Thúc Nội Dung Đường Dẫn-->
         <!--Bắt Đâu Nội Dung Liên Hệ-->
         <div class="noi-dung contact">
             <h2 style="padding-left: 1rem;">Liên lạc</h2>
             <ul class="info">
               
                 <li>
                   
                     <p><a href="#">0796856336</a>
                         <br />
                         <a href="#">0866474966</a></p>
                 </li>
                 <li>
                     <span style="background:white; font-size:10px; margin-right:5px"><img src="@/assets/images/gmail1.png" alt=""></span>
                     <p style="display:inline-block "><a href="#">nhthuan.336@gmail.com</a></p>
                </li>
                 
                 
             </ul>
         </div>
         <!--Kết Thúc Nội Dung Liên Hệ-->
     </div>
 </footer>
</template>

<script>
 
  

</script>
<style>
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans'); */
footer .container .noi-dung{
     margin-right: 30px;
 }
footer  .container .noi-dung.about{
     width:40%;
 }
 footer  h2{
     position: relative;
     color: #fff;
     font-weight: 500;
     margin-bottom: 15px;
     font-size: 20px;
 }
 footer .container .noi-dung.about h2:before{
     content: '';
     position: absolute;
     bottom: -5px;
     left: 0;
     width: 50px;
     height: 2px;
     background: #f00;
 }
footer .container .noi-dung.about p{
     color: #999;
 }
 /*Thiết Lập Cho Thành Phần Icon Mạng Xã Hội*/
 .social-icon{
     margin-top: 20px;
     display: flex;
 }
.social-icon li {
     list-style: none;
    
 }
 .social-icon li a{
     display: inline-block;
     width: 40px;
     height: 40px;
     background: #222;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-right: 10px;
     text-decoration: none;
     border-radius: 4px;
 }
.social-icon li a:hover{
     background: #f00;
 }
.social-icon li a .fa{
     color: #fff;
     font-size: 20px;
 }
.links h2{
     position: relative;
}
/* *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: Roboto;
 } */

footer{
      display: block; 
     width: 100%;
     height: 260px;
     padding: 50px 90px;
     background: #333;
     display: flex;
     justify-content: space-between;
   
    
     
 }
footer .container{
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     flex-direction: row;
 }

 .social-icon {
    padding-left: 0px;
 }

</style>









