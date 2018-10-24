(function () {
    function btn_click() {
        $(".btn").click(function () {
            alert("按钮被点击了！！！");
        })
    }
    function mouse_pass(){

        $(".mouse-event").mouseover(function(){
        $(".another-btn").css("display","block")
        }).mouseout(function(){
         $(".another-btn").css("display","none")
        });
    }
    
    btn_click();
    mouse_pass();

 
})()