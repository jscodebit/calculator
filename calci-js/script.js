Window.onLoad=function(){
// b1.addEventListener('click',function () {
// 	alert('did stuff inline');
// },false)


var button1 = document.getElementById("b1");
el.addEventListener("click", modifyText, false);

var button2 = document.getElementById("b2");
el.addEventListener("click", modifyText, false);

var button3 = document.getElementById("b3");
el.addEventListener("click", modifyText, false);

var button4 = document.getElementById("b4");
el.addEventListener("click", modifyText, false);

var button5 = document.getElementById("b5");
el.addEventListener("click", modifyText, false);

function modifyText(){
	alert('did stuff inline'+button1);
}