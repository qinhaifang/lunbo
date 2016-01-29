window.onload=function(){
	// 基础部分的数据存储  逻辑操作 

	// javascript特定用途部分  必须能做到的事
	// 能表达和页面中的任何元素
	// (几乎所有的页面元素对象都定义在window这个对象中)

	// 选取页面中的元素 
	var el=document.getElementById('text-j');
	console.log(el);   //如果没有text-j,会输出null
	var els=document.getElementsByClassName('text');
	console.log(els);
	// els现在是一个类数组
	// can't read property of null

	// 和浏览器配合通过对元素的属性进行操作改变元素的样式
	var colors=['red','green','blue','white','black'];
	for(var i=0;i<colors.length;i++){
		els[i].style.backgroundColor=colors[i];
	}
	// -------------------------------------------------------------
	// data=[
	// 	{translateX:'-500px',translateZ:'-400px'},
	// 	{translateX:'-230px',translateZ:'-200px'},
	// 	{translateX:'0',translateZ:'0'},
	// 	{translateX:'230px',translateZ:'-200px'},
	// 	{translateX:'500px',translateZ:'-400px'}
	// ];
	// for(var i=0;i<data.length;i++){
	// 		els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
	// 	}
	// -------------------------------------------------------------
	var data=[[-500,-400],[-230,-200],[0,0],[230,-220],[500,-400]];
	aaa=function(){
		for(var i=0;i<data.length;i++){
			els[i].style.webkitTransform='translate3d('+data[i][0]+'px,0,'+data[i][1]+'px)';
		}
		data.push(data.shift());
	};
	// 这个函数接受两个参数,第一个参数是回调函数,第二个参数是时间s
	// 这个函数的功能是 每隔s就自动帮我们调用一次传入的回调函数
	// 程序=数据结构+算法
	setInterval(aaa, 1000);

	// var ccc={
	// 	style:{border:null,with:100}
	// };
	// ccc.style.border='2px solid yellow';
	// el.style.border='2px solid red';

	// els[0].style.backgroundColor='red';
	// els[1].style.backgroundColor='blue';
 	// els[2].style.backgroundColor='blue';

	// for(var i=0;i<els.length;i++){
	// 	els[i].style.backgroundColor='red';
	// }
	// 并不是所有的对象都有style这个属性
// 知识点
// var el=document.getElementById();
// var els=document.getElementsByClassName();
// el.style.marginleft='';
// el.innerHTML='xx';
// setInterval(fn,1000);
// el.onclick=function(){console.log(this.innerHTML);};
// 1.id='screen';
// 2.var sc=document.getElementById('screen');
// 3.给所有得数字加上class   num
// 4.var nums=document.getElementsByClassName('num');
// 5.给所有的数字的div加onclick()
// nums[0].onclick=function(){}
// for(var i=0;i<nums.length;i++){
// 	nums[0].onclick=function(){
// 		alert(this.innerHTML);
// 	};
// }
// 6.把上一步函数中的alert(this.innerHTML)-->换成sc.innerHTML=this.innerHTML
// ------------------------------------------------------------------------
// 给运算符加上class oprator
// var ops=document.getElementsByClassName('oprator');
// 给等号加上id var equl=document.getElementById('denghao')
// 定义俩个变量 firstNumber=''  secondNumber=6;
// 给等号添加onclick
// 把nums[i].onclick 那个 function 加一句
// nums[i].onclick=function(){
// 	firstNumber=Number(this.innerHTML);
// };
// equl.onclick=function(){
// 	sc.innerHTML=firstNumber+secondNumber;
// };
// 和浏览器配合监测用户行为()事件
var cc=document.getElementsByClassName('text');
cc[0].style.width='400px';
cc[0].innerHTML='美女';
cc[0].onclick=function(){
	alert(this.innerHTML);
};

	// 选取元素的api
	// document.getElementById('') 会得到单个元素;
	// document.getElementsByClassName('mian');
	// xx.style.webkitTransform='translate3d(0,0,0)';

};