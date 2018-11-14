window.onload=function () {
  var button1=document.getElementById('button1');
  var block1 =document.getElementById('block1');
  button1.onclick=function(){
  block1.style.width="50%"
  block1.style.height="100px"
  block1.style.background="yellow"
  }


  var button2=document.getElementById("button2");
  var block2=document.getElementsByClassName('block2-test');
  button2.onclick=function () {
  $('.small-block').eq(0).toggleClass("red");
  $('.small-block').eq(1).toggleClass("yellow");
  }
  
   var button3=document.getElementById("button3");
   button3.onclick=function () {
      alert("一共有 "+ document.getElementsByTagName('div').length+"  个div");
    }

}