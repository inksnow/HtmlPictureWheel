<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link href="test.css" rel="stylesheet">
<link href="translate.css" rel="stylesheet">
<script type="text/javascript" src="jquery-3.3.1.js"></script>
<title>主页</title>
</head>
<!-- style="overflow-x:hidden " -->
<body style="overflow-x:hidden ">


<!-- 整个轮播控件，图片加小圆点加左右键加文字 -->
<div class = "wheel_combination">  
    <!--     显示区域 -->
 	<div class = "display_area" id="display_area"> 
        <!--  	三张img水平画廊,宽度应该为三张图片的宽度 -->
 	     <div class = "gallery" id= "gallery"  >
 	      	<img class = "gallery_img" style="left: 0px;" id= "img0" src="../testimages/bg1.jpg"/>
 	 		<img class = "gallery_img" style="left: 0px;" id= "img1" src="../testimages/bg2.jpg"/>
 	 		<img class = "gallery_img" style="left: 0px;"id= "img2" src="../testimages/bg3.jpg"/>
 	     </div>
 	</div>
 	<!--     显示区域end -->
        <!--小圆点指示器 -->
        <!--JS根据图片个数动态添加 -->
 		<div class = "cursors" id = "cursors"> </div>
 	    <!--小圆点指示器end -->
 	    
 	    <button class="button_left_right" onclick="leftClick()"  id="button_left" style="left:20px"><img class = "button_left_right_img" src="../testimages/left_img.png"/></button>
 	    <button class="button_left_right" onclick="rightClick()" id="button_right" style="right:20px"><img class = "button_left_right_img" src="../testimages/right_img.png"/></button>
 	
 		<div class="display_text" id="display_text">日出江花红似火</div>
</div>
<!-- 整个轮播控件end -->


</body>

<script type="text/javascript" src="./test.js"></script>

</html>