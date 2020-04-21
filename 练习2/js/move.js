
	/**
	 * 匀速运动.
	 * @param {Element} element - 对象表示调用的 HTML 元素.
	 * @param {number} target - 移动的位置.
	 * @param {number} num - 每次的移动距离.
	 */
	function uniformMotion(element,target,num){
		clearInterval(element.timeid);
		num = num || 30;
		var current = element.offsetLeft;
		var step=target>current?num:-num;
		element.timeid=setInterval(function(){
			if (Math.abs(target-current)>=Math.abs(step)) {
				current+=step;
				element.style.left=current+"px";
			}
			else{
				clearInterval(element.timeid);
				element.style.left=target+"px";
			}
		},30)
		
	}


	/**
	 * 缓速运动.
	 * @param {Element} element - 对象表示调用的 HTML 元素.
	 * @param {number} target - 移动的位置.
	 * @param {number} num - 每次的移动距离的被除数.
	 */
	function slowMotion(element,target,num){
		clearInterval(element.timeid);
		num = num || 5;
		var current=element.offsetLeft;
		var step;
		element.timeid=setInterval(function(){
				step=(target-current)/num;
				step=step>0?Math.ceil(step):Math.floor(step);
				if (current==target) {
					clearInterval(element.timeid);
				}else{
					current += step;
               		element.style.left = current + "px";
				}
		},30)
	

	}
