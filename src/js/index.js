$('.list').on("click","li>a",function(event){
    var myDate=new Date();
$(event.target).next().html(myDate.toLocaleString());
});