  /**
   * 轮播图.
   * @param {object} option - 表示传入的对象
   */
$.fn.slideshow = function(options) {
	   options = options || {};
    var current = options.current;
    var $btnRight = this.find(options.right);
    var $btnLeft = this.find(options.left);


    this.append($('<ul></ul>'));
    if(current!="" && current!=undefined){
           this.append($('<ol></ol>'));
      }
    var $ul = this.find("ul");
    var $ols = this.find("ol");
   

    
    var index = 0;
	var imgs = options.imgsList;  
    for (var i = 0; i < imgs.length; i++) {
    
       $ul.append($('<li><a href="#"><img src='+imgs[i]+'></a></li>'));
       if(current!="" && current!=undefined){
            $ols.append($('<li></li>'));
       }
      
    }
     var $lis = this.find("ul li");
   
  

     $olLis =this.find("ol li");

     $olLis.eq(index).addClass(current);

     $olLis.click(function (event) {
              var target=event.target;
              var idx=$(target).index()
              index=idx;
              Run();            
            })

     $btnRight.click(function () {
            Run("right");         
            })

     $btnLeft.click(function () {
            Run("left");             
            })

     var iCount;

     iCount= setInterval(function () {
             Run("right");
      }, 2000)


    this.mouseenter(function(){
       clearInterval(iCount);
     })

   this.mouseleave(function() {
       iCount= setInterval(function () {
            Run("right");
        }, 2000)
               
     })

   function Run(direction){
         if(direction != undefined){
              index=direction == "right"?index+1:index-1;
         }
         if (index > $lis.length - 1) {
             index = 0;
         }
         $lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
         $olLis.eq(index).addClass(current).siblings().removeClass(current);
      
   }
  }


