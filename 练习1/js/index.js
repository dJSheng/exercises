 /**
  *鼠标划过有滑块效果，点击后滑块固定在当前点击的条目上
  */
 var lisa = document.querySelectorAll(".nav li a");
 var huaDong = document.querySelector("#huaDong");
 var position = 0;
 lisa[0].className = "now";
 for (var i = 0; i < lisa.length; i++) {

 	  lisa[i].onmouseover = function() {
            slowMotion(huaDong, this.offsetLeft);

        }

      lisa[i].onmouseout = function() {
            slowMotion(huaDong, position); 

        }

      lisa[i].onclick = function() {
			position = this.offsetLeft;
			for (var i = 0; i < lisa.length; i++) {
				lisa[i].className="";
			}
        	this.className = "now";
        	}

    }

 /**
  *鼠标移入到按钮加一个箭头，移出则恢复至原本
  */
 var conBtn = document.querySelectorAll(".main .continue");
 for (var i = 0; i < conBtn.length; i++) {
 	   conBtn[i].onmouseover=function(){
 	   		 this.className="";
 	   		 this.innerText="Continue Reading   →"
 	   		 this.className="nowContinue";
 	        }
 
        conBtn[i].onmouseout = function() {
            for (var i = 0; i < conBtn.length; i++) {
                 this.innerText="Continue Reading"
                 conBtn[i].className="continue";
              }
            }
     
 }

