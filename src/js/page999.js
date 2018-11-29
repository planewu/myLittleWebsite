function drawTime() {
    var drawing = document.getElementById("clock");
    var context = drawing.getContext("2d");
    var myDate = new Date();
    if (drawing.getContext) {

        context.beginPath();
        context.arc(250, 250, 230, 0, 2 * Math.PI, false);
        context.arc(250, 250, 220, 0, 2 * Math.PI, false);

        context.font = "bold 24px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("12", 250, 50);
        context.fillText("11", 154, 86);
        context.fillText("10", 86, 154);
        context.fillText("9", 50, 250);
        context.fillText("8", 86, 346);
        context.fillText("7", 154, 414);
        context.fillText("6", 250, 450);
        context.fillText("5", 346, 414);
        context.fillText("4", 414, 346);
        context.fillText("3", 450, 250);
        context.fillText("2", 414, 154);
        context.fillText("1", 346, 86);

        context.stroke();

        context.fillRect(245, 245, 10, 10);


        var hour = myDate.getHours();
        var min = myDate.getMinutes();
        var sec = myDate.getSeconds();

        context.beginPath();
        //draw 秒针
        context.moveTo(250, 250);
        var sec_x = 200 * Math.cos(sec*6) + 250;
        var sec_y = 200 * Math.sin(sec*6) + 250;
        context.lineTo(sec_x, sec_y);

        //draw 分针+
        context.moveTo(250, 250);
        var min_x = 150 * Math.cos(min*6) + 250;
        var min_y = 150 * Math.sin(min*6) + 250;
        context.lineTo(min_x, min_y);

        //draw 时针
        context.moveTo(250, 250);
        var hour_x = 100 * Math.cos(hour*24/360) + 250;
        var hour_y = 100 * Math.sin(hour*24/360) + 250;
        context.lineTo(hour_x, hour_y);
        context.stroke();
    }
}
setInterval(function () {
    
    drawTime()
 }, 1000);


