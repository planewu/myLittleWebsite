(function () {
    (function btn_click() {
        $(".btn").click(function () {
            alert("按钮被点击了！！！");
        })
    })();
    (function mouse_pass(){

        $(".mouse-event").mouseover(function(){
        $(".another-btn").css("display","block")
        }).mouseout(function(){
         $(".another-btn").css("display","none")
        });
    })();
    (function div_change(){
        $(".change-div").mouseover(function(){
            $(".change-div").css("background","red")   
        }).mouseout(function(){
            $(".change-div").css("background","white")
        })
    })();
    (function show_div1(){
        $(".show-div1").mouseover(function(){
            $(".show-div11").css("display","block")   
        }).mouseout(function(){
            $(".show-div11").css("display","none")
        })
    })();
    (function show_div2(){
        $(".show-div2").click(function(){
            var show_css= $(".show-div22").css("display")
            show_css=="none"?$(".show-div22").css("display","block"):$(".show-div22").css("display","none");
        })
    })();
    (function change_background(){
       $(".style-btn1").click(function () { 
          $("#background-pic").addClass("img101001");
        })
        $(".style-btn2").click(function () { 
            $("#background-pic").addClass("img101002");
         })
         $(".style-btn3").click(function () { 
            $("#background").hide();
             $("#background-pic").css("height",$(window).height());
            setTimeout(function(){
                $("#background").show();
            },3000);
         })
         
    })()

 
})()