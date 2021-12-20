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


function slideChange(sliderID, slideDirection) {
  var currentSlider = document.getElementById(sliderID);
  var slides = currentSlider.getElementsByClassName('slider_slide');
  for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('slider_slide_active')) {
          slides[i].classList.remove('slider_slide_active');
          slides[i].classList.add('slider_slide_inactive');
          if (slideDirection == 'left') {
              if (i == 0) {
                  i = slides.length - 1;
              } else {
                  i--;
              }
          } else {
              if (i == slides.length - 1) {
                  i = 0;
              } else {
                  i++;
              }
          }
          slides[i].classList.remove('slider_slide_inactive');
          slides[i].classList.add('slider_slide_active');
          break;
      }
  }
}