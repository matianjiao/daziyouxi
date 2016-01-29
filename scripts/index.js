window.onload=function(){
	var body=document.getElementById('body');
	var wai=document.createElement('div');
	wai.setAttribute('id','wai');
	body.appendChild(wai);
	var i=0;
	var timeid=setInterval(function(){
		var xiao=document.createElement('div');
		xiao.setAttribute('class','xiao');
		// 生成65-90  97--122的随机数
		// var num=Math.floor(Math.random()*123);
		// if(num>=65 && num<=90 || num<=122 && num>=97){
		// 	xiao.innerHTML=String.fromCharCode(num);	
		// 	wai.appendChild(xiao);
		// }else{
		// 	i--;//生成的num不是字母,重新生成
		// }

		// 生成65到122的随机数
		var num=65+Math.floor(Math.random()*(122-65));
		while(num>=91 && num<=96){
			num=65+Math.floor(Math.random()*(122-65));
		}
		xiao.innerHTML=String.fromCharCode(num);
		wai.appendChild(xiao);
		if(i==52){
			clearInterval(timeid);
		}
		i++;
	},80);
	

	var opa=0.4;
	var LEFT=350;
	setInterval(function(){
		yun.style.left=LEFT+'px';
		yun.style.opacity=opa;
		opa+=0.1;
		LEFT+=1;
		if(opa>=1){
			opa=0.4;
		}
		if(LEFT>=600){
			LEFT=350;
		}
	},1000);




	// var i=1,kaiguan=true;	
	// document.onkeydown=function(e){
	// 	var xiao=document.getElementsByClassName('xiao');		
	// 	if(e.shiftKey==true){
	// 		if(String.fromCharCode(e.keyCode)==xiao[0].innerHTML){
	// 			xiao[0].style.display='none';
	// 		}
	// 		if(xiao[i-1].style.display=='none' && String.fromCharCode(e.keyCode) ==xiao[i].innerHTML){
	// 			xiao[i].style.display='none';
	// 			i++;			
	// 		}
	// 	}else{
	// 		if(String.fromCharCode(e.keyCode + 32) ==xiao[0].innerHTML){
	// 			xiao[0].style.display='none';
	// 		}
	// 		if(xiao[i-1].style.display=='none' && String.fromCharCode(e.keyCode + 32) ==xiao[i].innerHTML){
	// 			xiao[i].style.display='none';
	// 			i++;			
	// 		}
	// 	}

	// // 时间
	// 	var fen=document.getElementById('fen');
	// 	var miao=document.getElementById('miao');
	// 	var count=1,count1=1;
	// 	if(kaiguan){
	// 		 // count=1,count1=1;
	// 		setInterval(function(){
	// 			miao.innerHTML='0'+count;
	// 			count++;
	// 			if(count>=10){
	// 				miao.innerHTML=' '+count;
	// 			}
	// 			if(count==59){
	// 				count=0;
	// 			}
	// 		},1000);

	// 		setInterval(function(){
	// 			fen.innerHTML=count1+':';
	// 			count1++;
	// 		},60000);

	// 		kaiguan=false;
			
	// 	}

	// 	if(i==52){
	// 	 	alert(fen.innerHTML+miao.innerHTML);
	// 		window.location.reload();
	// 	}


	// }
		
// 与上面document.onkeydown一样-------老师  打中消失
	var i=1,kaiguan=true;
	var wai=document.getElementById('wai');
	var one;
	setTimeout(function(){
		one=wai.firstElementChild;
		console.log(one);
	},100);
	document.onkeydown=function(e){
		if(e.shiftKey==true){
			if(String.fromCharCode(e.keyCode)==one.innerHTML){
				one.style.background='rgba(' +Math.floor(Math.random()*225)+ ',' +Math.floor(Math.random()*225)+ ',' +Math.floor(Math.random()*225)+ ',' +0.95+ ')';
				one.style.marginTop='-315px';
				one=one.nextElementSibling;
			} 
		}else{
			if(e.shiftKey==false &&String.fromCharCode(e.keyCode + 32) ==one.innerHTML){
				one.style.background='rgba(' +Math.floor(Math.random()*225)+ ',' +Math.floor(Math.random()*225)+ ',' +Math.floor(Math.random()*225)+ ',' +0.95+ ')';
				one.style.marginTop='-315px';
				one=one.nextElementSibling;
			}
		}


		// // 时间
		var fen=document.getElementById('fen');
		var miao=document.getElementById('miao');
		var count=1,count1=1;
		if(kaiguan){
		//目的:使setInterval只调用一次,不然按一次就会有一个setInterval被创出来
		// 按下键盘的一瞬间就开始调用函数setInterval 随后关闭,之后不再调用
			setInterval(function(){
				count++;
				fen.innerHTML='0'+Math.floor(count/60)+':';
				if(count>=10){
					miao.innerHTML=' '+Math.floor(count%60);
				}else{
					miao.innerHTML='0'+Math.floor(count%60);
				}
			},1000);

			kaiguan=false;
			
		}

		if(wai.lastElementChild.style.marginTop=='-310px'){
			setTimeout(function(){
				zhezhao.style.display='block';
				shijian.innerHTML=fen.innerHTML+' '+miao.innerHTML;
			},700);
			btn.onclick=function(){
				window.location.reload();
			}
		}


	}


// 打中覆盖
	// var one=wai.firstElementChild;
	// document.onkeydown=function(e){
	// 	var wai=document.getElementById('wai');
	// 	console.log(one);
	// 		if(e.shiftKey==true){
	// 			if(String.fromCharCode(e.keyCode)==one.innerHTML){
	// 				one.style.background='#ff0';
	// 				one=one.nextElementSibling;
	// 			}
	// 		}else{
	// 			if(String.fromCharCode(e.keyCode + 32) ==one.innerHTML){
	// 				one.style.background='#ff0';
	// 				one=one.nextElementSibling;
	// 			}
	// 		}

	// 	// // 时间
	// 	var fen=document.getElementById('fen');
	// 	var miao=document.getElementById('miao');
	// 	var count=1,count1=1;
	// 	if(kaiguan){
	// 		setInterval(function(){
	// 			miao.innerHTML='0'+count;
	// 			count++;
	// 			if(count>=10){
	// 				miao.innerHTML=' '+count;
	// 			}
	// 			if(count==60){
	// 				count=0;
	// 			}
	// 		},1000);

	// 		setInterval(function(){
	// 			fen.innerHTML='0'+count1+':';
	// 			count1++;
	// 		},60000);

	// 		kaiguan=false;
			
	// 	}

	// 	if(one==null){
	// 		alert(fen.innerHTML+miao.innerHTML);
	// 		window.location.reload();
	// 	}


	// }







}