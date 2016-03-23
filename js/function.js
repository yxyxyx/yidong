function getClass(classname,range){
  	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsTagName("*");
		var narrow=[];
		for(i=0;i<all.length;i++){
			if(checkClass(arr[i],className)){
				narrow.push(all[i]);
			}
		}
       return narrow;
	}
}
function $(selecter){
	var first=selecter.charAt(0);
	if(first=="#"){
		return document.getElementById(selecter.substring(1));
	}else if(first=="."){
		return getClass(selecter.substring(1));
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return document.getElementsByTagName(selecter);
	}
}