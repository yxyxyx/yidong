window.onload=function(){
	var banner_tou=document.getElementsByClassName("banner_tou")[0];
	var lis=document.getElementsByClassName("tou_itemy");
	var downmanu=document.getElementsByClassName("downmanu");
	for(i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
			downmanu[j].style.display="none";
		}
		downmanu[this.index].style.display="block";
	}
	lis[i].onmouseout=function(){
		for(var j=0;j<lis.length;j++){
			downmanu[this.index].style.display="none";
		}
	}
  }

//     window.onload=function(){
//     var win=$("banner_img");
// 	var imgs=$("a",win);

//     var num=0;
// 	setInterval(function(){
//         num++;
//         if(num==imgs.length){
//         	num=0;
//         }
//         for(var i=0;i<imgs.length;i++){
//         	imgs[i].style.zIndex=0;


//         }
//         imgs[num].style.zIndex=3;

// 	},300)
// }

    var win=$(".banner_img")[0];    //轮播
    var imgs=$(".abc");
    var lins=$(".xd");
    var btnl=$(".btnl")[0];
    var btnr=$(".btnr")[0];
    var num=0;
    var t =setInterval(move,1000);


    win.onmouseover=function(){       //鼠标移入移出
        clearInterval(t);
    }
    win.onmouseout=function(){
        clearInterval(t);
        t=setInterval(move,1000);
    }

    for(var i=0;i<imgs.length;i++){
        lins[i].index=i;
        lins[i].onclick=function(){
            num=this.index;
            for(var i=0;i<imgs.length;i++){
                
                imgs[i].style.zIndex=0;
                lins[i].style.background="#fff";
            }
            imgs[num].style.zIndex=3;
            lins[this.index].style.background="red";

        }
    }

    btnr.onclick=function(){
        move();
    }
    btnl.onclick=function(){
       num--;
       if (num <0) {
           num = imgs.length-1;
       }
       for (var i = 0; i < imgs.length; i++) {
           imgs[i].style.zIndex=0;
           lins[i].style.background="#fff";
       }
       imgs[num].style.zIndex=3;
       lins[num].style.background="red";
   }


    function move(){                  //轮播
            num++;
            if(num==imgs.length){
                num=0;
            }
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.zIndex=0;
                lins[i].style.background="#fff";
            }
            imgs[num].style.zIndex=3;
            lins[num].style.background="red";
        }

}
