canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d")

background = "parkingLot.jpg";
green_car = "car2.png";

greencar_height=100
greencar_width=75

green_carX=5
green_carY=225

function add() {
background_image= new Image()
background_image.onload=uploadbackground()
background_image.src=background;

greencar= new Image();
greencar.onload=uploadgreencar();
greencar.src=green_car;
}

function uploadgreencar() {
ctx.drawImage(greencar,green_carX,green_carY,greencar_width,greencar_height)
}
function uploadbackground() {
	ctx.drawImage(background_image,0,0,canvas.width,canvas.height)
}

	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (green_carY >= 0) {
        green_carY = green_carY - 10
        uploadbackground();
        uploadgreencar();
    }
}
function down()
{
	if (green_carY <= 410) {
        green_carY = green_carY + 10
        uploadbackground();
        uploadgreencar();
}
}
function left()
{
	if (green_carX >= 0) {
        green_carX = green_carX - 10
        uploadbackground();
        uploadgreencar();
}
}
function right(){

if (green_carX <= 600 ) {
	green_carX = green_carX + 10
	uploadbackground();
	uploadgreencar();
}
}