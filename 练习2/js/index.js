
   
    /**
     *点击左右按钮会切换样式
     */
    var boxLiuChen=document.querySelector(".liuChenAllBox");
    var lisLiuChen =document.querySelectorAll(".liuChenAllBox>li");
    var lisImgLiuChen =document.querySelectorAll(".liuChenImg");
    var nextBtnLiuChen = document.querySelector(".liuChenRight");
    var prevBtnLiuChen = document.querySelector(".liuChenLeft");
     var  indexLiuChen =0 ;


    lisLiuChen[0].className="current";
    lisImgLiuChen[0].style.borderColor= '#34b3e0';
  




     nextBtnLiuChen.onclick =function(){
        indexLiuChen++;
       for (var i = 0; i < lisLiuChen.length; i++) {
           lisLiuChen[i].className="  ";
           lisImgLiuChen[i].style.borderColor= '#b0b0b0';
           lisLiuChen[lisLiuChen.length-1].className="liuChenLast";
           
         
       }
       if(indexLiuChen>=lisLiuChen.length){
            lisLiuChen[lisLiuChen.length-1].className="current liuChenLast";
            lisImgLiuChen[lisLiuChen.length-1].style.borderColor= '#34b3e0';
             indexLiuChen=lisLiuChen.length-1;
        }else if(indexLiuChen==lisLiuChen.length-1){
            lisLiuChen[indexLiuChen].className="current liuChenLast";
            lisImgLiuChen[indexLiuChen].style.borderColor= '#34b3e0';
        }
       else{
               lisLiuChen[indexLiuChen].className="current";
               lisImgLiuChen[indexLiuChen].style.borderColor= '#34b3e0';
        }

    }

    prevBtnLiuChen.onclick=function(){

       indexLiuChen--;
       for (var i = 0; i < lisLiuChen.length; i++) {
           lisLiuChen[i].className="  ";
           lisImgLiuChen[i].style.borderColor= '#b0b0b0';
           lisLiuChen[lisLiuChen.length-1].className="liuChenLast";
           
         
       }
       if(indexLiuChen<0){
        indexLiuChen=0;
            lisLiuChen[0].className="current";
            lisImgLiuChen[0].style.borderColor= '#34b3e0';
            lisLiuChen[lisLiuChen.length-1].className="liuChenLast";
        }else if(indexLiuChen==lisLiuChen.length-1){
            lisLiuChen[indexLiuChen].className="current liuChenLast";
            lisImgLiuChen[indexLiuChen].style.borderColor= '#34b3e0';
        }
       else{
               lisLiuChen[indexLiuChen].className="current";
               lisImgLiuChen[indexLiuChen].style.borderColor= '#34b3e0';
        }
       
    }

    /**
     *无缝轮播图，点击小圆点会移动到指定的图片，点击左右按钮会切换，鼠标移动到图片上会暂停切换，移开会自动切换。
     */
    var box = document.querySelector(".whyBox")
    var ul =box.querySelector(".whySelect");
    var ol = box.querySelector(".whyYuan");
    var img = ul.getElementsByTagName("li");
    var olLi=ol.getElementsByTagName("li")
    var nextBtn = box.querySelector(".whyYuanRight");
    var prevBtn = box.querySelector(".whyYuanLeft");
    var  index =0 ;

    olLi[0].className="current"

    ul.appendChild(ul.firstElementChild.cloneNode(true));

    nextBtn.onclick =function(){
        if(index>=img.length-1){
            index=0;
            ul.style.left=0;
        }
        index++;
        uniformMotion(ul,-index*box.offsetWidth,40);
        for (var i = 0; i < olLi.length; i++) {
            olLi[i].className="";
        }
        if(index>=img.length-1){
            olLi[0].className="current";
        }else{
            olLi[index].className="current";
        }

    }

    prevBtn.onclick=function(){
        if(index<=0){
            index=img.length-1;
            ul.style.left=-index*box.offsetWidth+ "px";
        }
        index--;
        uniformMotion(ul,-index*box.offsetWidth,40);
        for (var i = 0; i < olLi.length; i++) {
            olLi[i].className="";
        }
        olLi[index].className="current"
    }


    for (var i = 0; i < olLi.length; i++) {
        olLi[i].index=i;
        olLi[i].onclick=function(){
            for (var i = 0; i < olLi.length; i++) {
                olLi[i].className="";
            }
            this.className="current";
            index=this.index; 
            uniformMotion(ul,-this.index*box.offsetWidth,40);
        }

    }


  
    var timerid = setInterval(function(){
             nextBtn.onclick(); 
    }, 2000)

    box.onmouseover= function(){
        clearInterval(timerid);
    }

    box.onmouseout= function(){
        timerid=setInterval(function(){
        nextBtn.onclick();  
    }, 2000)
    }


 
  

