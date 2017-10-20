
var btn=document.getElementsByTagName("button")[0];
var load=document.getElementById("load");
var li=document.getElementsByTagName("li");
var step=0;
var arr1=[],arr2=[];

for(var i=0;i<100;i++){
	li[i].index=i;
	li[i].onclick=function(){  //加事件
		if(this.className==""){  //判断是否为空
		   if(step%2==0){  //判断到哪一边下棋了
		       this.className="green";
			   arr1.push(this.index);
			   step++;
		   }else{
			   this.className="red";
			   step++;
			   arr2.push(this.index);
		   }
		}
		if(step>=9&&test(arr1)){  //判断是否是a赢？
      		alert("黑子赢了");
		}
		if(step>=9&&test(arr2)){  //判断是否是a赢？
      		alert("白子赢了");
		}
	}
}
function test(arr){
	var a=arr.sort(compare);
	var len=arr.length;
	var count=0;
	for(var i=0;i<len;i++){
		j=i;
		if((a[j]%10)<=5){         //横着赢得情况
			while(a[j+1]==a[j]+1){
				j++;
				count++;
				if(count==4)
					return true;
		    }
		}
		count=0;
		j=i;
		if(a[j]<=60){
			while(inArr(j,a)){//竖着赢得情况
				return true;
		    }
		}
		count=0;
		j=i;
		if((a[j]%10)<=5&&a[j]<=60){//斜着赢得情况1
			while(inArr2(j,a)){
				return true;
			}
		}
		count=0;
		j=i;
		if((a[j]%10)>=5&&a[j]<=60){//斜着赢得情况2
			while(inArr3(j,a)){
				return true;
			}
		}
	}
}
function inArr(j,a){
	var len=a.length;
	var count=0,k=1;
	for(var i=j;i<len;i++){
		if(a[j]+10*k==a[i]){
			count++;
			k++;
			if(count==4)
			return true;
		}
	}
}
function inArr2(j,a){
	var len=a.length;
	var count=0,k=1;
	for(var i=j;i<len;i++){
		if(a[j]+11*k==a[i]){
			count++;
			k++;
			if(count==4)
			return true;
		}
	}
}
function inArr3(j,a){
	var len=a.length;
	var count=0,k=1;
	for(var i=j;i<len;i++){
		if(a[j]+9*k==a[i]){
			count++;
			k++;
			if(count==4)
			return true;
		}
	}
}
function compare(item1,item2){
	return item1-item2;
}
btn.onclick=function(){
	step=0;
	arr1=[],arr2=[];
	for(var i=0;i<100;i++){
		li[i].className="";
	}
};
load.style.display="none";
