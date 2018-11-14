window.onload=function () {
  $("#button1").click(function () {
      var i=5;
    while(i--)
    {
        y=5-i;
        alert("这是第 "+y+" 个提示框");
    }
  });

  $("#button2").click(function(){
      for(var i=0;i<4;i++){
          $(".small-block").eq(i).css("background","yellow")
      }
  });

}