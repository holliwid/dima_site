var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



// canvas
	// set up initial variables
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
 
  ctx.beginPath();
  ctx.moveTo(200,0);
  ctx.lineTo(100,300);
  ctx.stroke();

function drawCircle(x, y, color){
  ctx.beginPath();
  ctx.arc(x,y,10,0,2*Math.PI);
  ctx.fillStyle=color;
  ctx.fill();
}
var x = 0;
setInterval(function(){ 
  ctx.clearRect(0,0,400,400);
  drawCircle(x%300, 85, 'blue');
  drawCircle((x+20)%300, 55, 'red');
  drawCircle((x+40)%300, 110, 'yellow');
  drawCircle((x+60)%300, 25, 'green');
  x++;
}, 20);


$('.toggle-menu-btn').click((event) => {
  $('.nav-link1').slideToggle('slow', () => {});
});