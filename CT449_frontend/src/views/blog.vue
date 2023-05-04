<template>
<div class="head">
<!-- <a href="" class="blog"><img src="@/assets/images/blog.jpeg" alt=""></a> -->
   </div>
    <article>
       <div class="container">
    
   <!-- <h1>Chào mừng</h1> -->
   <section class="item">
      <h1>Tin tức</h1>
      <a href=""> 
          <img src="@/assets/images/blog.jpeg" alt=""></a>
    

      <div class="article-right">
          <h3>Lễ hội Xoài Cao Lanh</h3>
           <p>Chiều 12-4, tỉnh Đồng Tháp họp báo công bố Lễ hội xoài năm 2023 với chủ đề: "Xoài Đồng Tháp - nâng tầm vị thế", điểm nhấn của lễ hội là ứng dụng chuyển đổi số, tháo gỡ khó khăn cho nông dân.....</p>
      </div>
   </section>
       </div>
     </article>

</template>
<style scoped>
.container{ 
    width: 900px;
    height: 500px;
    /* border: 1px solid red; */
}

.item {
    width:900px;
    height: 500px;
    /* border: 2px solid red; */

}
.article-right{
    display: inline-block;
    width:560px;
    margin-left: 20px;
     
}

.item img{
    width: 300px;
    height: 300px;
    display: inline-block;

}
h3{
    font-size: 20px;
    font-family:Arial, Helvetica, sans-serif;
}
.blog img{
    width:100%;
}
</style>