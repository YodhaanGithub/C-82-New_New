var mouseEvent = "empty"

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="blue";
width_of_circle_line = 2;
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ")
        console.log("x = "+ current_position_of_x + "y =" + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= width_of_circle_line;
        ctx.arc(current_position_of_x, current_position_of_y, 40, 0, 2 *Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
