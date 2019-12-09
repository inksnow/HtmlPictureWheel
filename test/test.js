//页面加载完成后执行轮播等方法
//var isInit = false;
//var img0 = document.getElementById("img0");
//img0.onload=function(){
//	if(!isInit){
//		isInit = true;
//		 addloadEvent(init);
//	}
//	};
 //alert("你好，我是一个警告框！");

addloadEvent(init);
 function addloadEvent(func){

	 var oldonload=window.onload;
	 if(typeof window.onload !="function"){
	  window.onload=func;
	 }
	 else{
	  window.onload=function(){
	  if(oldonload){
	   oldonload(); 
	  }
	  func();
	  }
	 }
	 }

 function init(){
	 var imgArray = new Array("bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg");
	 var textArray  = new Array("日出江花红胜火","春来江水绿如蓝","窗含西岭千秋雪","门泊东吴万里船","天街小雨润如酥");
	 
	 
	 var cursorsArray = new Array();
	 var imgNumber = 5;
	 var clickTimer = null;
	 var autoPlayTime = 4000;
	 //当前展示的图片
	 var imgIndex = 0;
	 var imgViewArray = new Array();
	 var gallery= document.getElementById("gallery");
	 var o = document.getElementById("display_area");
	 var img0 = document.getElementById("img0");
	 var img1 = document.getElementById("img1");
	 var img2 = document.getElementById("img2");
	 imgViewArray[0] = img0;
	 imgViewArray[1] = img1;
	 imgViewArray[2] = img2;
	 //获取显示区域的高度，设置圆点，文字，及左右按键的位置
	 var viewHeight = img0.offsetHeight;
	 //设置小圆点位置
	 var cursors =  document.getElementById("cursors");
	 cursors.style.top = viewHeight-30+"px";
	 //设置左右按钮的位置
	 var buttonLeft = document.getElementById("button_left");
	 var buttonRight = document.getElementById("button_right");
	 var textView = document.getElementById("display_text");
	 buttonLeft.style.top = (viewHeight-parseFloat(buttonLeft.offsetHeight))/2+"px";
	 buttonRight.style.top = (viewHeight-parseFloat(buttonRight.offsetHeight))/2+"px";
	 textView.style.top = viewHeight-70+"px";
	 buttonLeft.onclick = function () { 
		 //停止自动播放，三秒后再开始播放
		 stop();
		 if(clickTimer!=null){
			 clearInterval(clickTimer);
		 }
		 clickTimer=setInterval(function(){
			 play();
		 },3000); 
		 animate(100);
	 }
	 buttonRight.onclick = function () { 
		 //停止自动播放，三秒后再开始播放
		 stop();
		 if(clickTimer!=null){
			 clearInterval(clickTimer);
		 }
		 clickTimer=setInterval(function(){
			 play();
		 },3000);
		 animate(-100);
	 }
	 for(var cs = 0;cs<imgNumber;cs++){
		 var div = document.createElement("div");
		 if(imgIndex==cs){
			 div.className="cursors_on"; 
		 }else{
			 div.className="cursors_off";
		 }
		 cursorsArray[cs] = div;
	 	 cursors.appendChild(div);  
	 }
	 var leftImgIndex = imgIndex-1;
	 if(leftImgIndex<0){
		 //当前显示的是第一张，则当前显示的左边显示最后一张
		 leftImgIndex = imgNumber-1;
	 }
	 var midImgIndex = imgIndex;
	 var rightImgIndex = imgIndex+1;
	 if(rightImgIndex>(imgNumber-1)){
		 //当前显示的是最后一张，则右边显示第一张
		 rightImgIndex = 0;
	 }
	 $("#display_text").html(textArray[imgIndex]);
	 imgViewArray[0] .src="../testimages/"+imgArray[leftImgIndex];
	 imgViewArray[1] .src="../testimages/"+imgArray[midImgIndex];
	 imgViewArray[2] .src="../testimages/"+imgArray[rightImgIndex];
	 var oneWidth =  o.clientWidth||o.offsetWidth;
	 imgViewArray[0].style.left="-100%";
	 imgViewArray[1].style.left="0%";
	 imgViewArray[2].style.left="100%";
	
	 //每次移动间隔
	 var interval=10;
	 //总时间
	 var times = 400;
	 var isAnimate = false;
	 //移动动画    width左移或右移量-100 或100
	 function animate(width){
		 if(!isAnimate){
			 isAnimate = true;
			 textView.style.left = "-100%";
			 //每次移动距离
			 var speed=width/(times/interval);
			 //剩余需要移动的量
			 var offset = width;
			 go();
			 function go(){
				 if(offset!=0){
					 if(Math.abs(offset -speed)<Math.abs(speed)){
						 //最后一次移动
						 speed = offset;
					 }else{
						 speed=width/(times/interval); 
					 }
					 imgViewArray[0].style.left=parseFloat(imgViewArray[0].style.left)+speed+"%";//每次位移的值
					 imgViewArray[1].style.left=parseFloat(imgViewArray[1].style.left)+speed+"%";//每次位移的值
					 imgViewArray[2].style.left=parseFloat(imgViewArray[2].style.left)+speed+"%";//每次位移的值
					
					 offset = offset -speed; 
					 setTimeout(go,interval);
				 }else{					 
					 //动画结束
				
					 if(width>0){
						 //右移
						 imgIndex--;
						 if(imgIndex<0){
							 imgIndex = imgNumber-1;
						 }
						 
						 var f = imgViewArray[2];
						 imgViewArray[2] = imgViewArray[1];
						 imgViewArray[1] = imgViewArray[0];
						 imgViewArray[0] = f;
						 imgViewArray[0].style.left="-100%";
						 imgViewArray[1].style.left="0%";
						 imgViewArray[2].style.left="100%";
						  leftImgIndex = imgIndex-1;
						 if(leftImgIndex<0){
							 //当前显示的是第一张，则当前显示的左边显示最后一张
							 leftImgIndex = imgNumber-1;
						 }
						  midImgIndex = imgIndex;
						  rightImgIndex = imgIndex+1;
						 if(rightImgIndex>(imgNumber-1)){
							 //当前显示的是最后一张，则右边显示第一张
							 rightImgIndex = 0;
						 }
						 
						 imgViewArray[0] .src="../testimages/"+imgArray[leftImgIndex];
						// imgViewArray[1] .src="../images/"+imgArray[midImgIndex];
						 imgViewArray[2] .src="../testimages/"+imgArray[rightImgIndex];
					 }else{
						 //左移
						 imgIndex++;
						 if(imgIndex==imgNumber){
							 imgIndex = 0;
						 }
						 var f = imgViewArray[0];
						 imgViewArray[0] = imgViewArray[1];
						 imgViewArray[1] = imgViewArray[2];
						 imgViewArray[2] = f;
						 imgViewArray[0].style.left="-100%";
						 imgViewArray[1].style.left="0%";
						 imgViewArray[2].style.left="100%";
						  leftImgIndex = imgIndex-1;
						 if(leftImgIndex<0){
							 //当前显示的是第一张，则当前显示的左边显示最后一张
							 leftImgIndex = imgNumber-1;
						 }
						  midImgIndex = imgIndex;
						  rightImgIndex = imgIndex+1;
						 if(rightImgIndex>(imgNumber-1)){
							 //当前显示的是最后一张，则右边显示第一张
							 rightImgIndex = 0;
						 }
						 
						 imgViewArray[0] .src="../testimages/"+imgArray[leftImgIndex];
						 //imgViewArray[1] .src="../images/"+imgArray[midImgIndex];
						 imgViewArray[2] .src="../testimages/"+imgArray[rightImgIndex];
					 }
					 
					 for(var cs = 0;cs<imgNumber;cs++){
						 if(imgIndex==cs){
							cursorsArray[cs].className="cursors_on";
						 }else{
							 cursorsArray[cs].className="cursors_off";
						 }
					 }
					 
					 //文本进入动画
					 //textView.style.left = "0%";
					 $("#display_text").html(textArray[imgIndex]);
					 var offsetText = 100;
					 var speedText =offsetText/40; 
					 intoText();
					 function intoText(){
						 //alert("文字left"+parseFloat(textView.style.left));
						 
						 if(offsetText!=0){
							 if(Math.abs(offsetText -speedText)<Math.abs(speedText)){
								 //最后一次移动
								 speedText = offsetText;
							 }else{
								 speedText=100/40; 
							 }
							 textView.style.left=parseFloat(textView.style.left)+speedText+"%";//每次位移的值
						
							 offsetText =offsetText -speedText; 
							 setTimeout(intoText,10);
						 }else{
							 //文字动画结束
							 isAnimate = false;
						 }
					 }
		
				 }
				}
		 }
		 
	 }
	 
	 play();
	 //自动播放
	 function play(){
		 if(clickTimer!=null){
			 clearInterval(clickTimer);
		 }
		 timer=setInterval(function(){
			 animate(-100); 
		 },autoPlayTime);
	}
	 //停止播放
	 function stop(){
	 clearInterval(timer);
	 }
	 
	 $(window).resize(function(){ 
		  var wHeight = $(window).height();
		  var wWidth = $(window).width();
		  //获取显示区域的高度，设置圆点，文字，及左右按键的位置
		var viewHeight = img0.offsetHeight;
		 //var cursors =  document.getElementById("cursors");
		 cursors.style.top = viewHeight-30+"px";
		 buttonLeft.style.top = (viewHeight-parseFloat(buttonLeft.offsetHeight))/2+"px";
		 buttonRight.style.top = (viewHeight-parseFloat(buttonRight.offsetHeight))/2+"px";
		 textView.style.top = viewHeight-70+"px";
		})

 }
 

 

 
 
 