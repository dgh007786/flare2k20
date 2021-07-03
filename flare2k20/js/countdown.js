
var countDownDate = new Date("Apr 17, 2020 00:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours  
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("").innerHTML = "EXPIRED";
  }
}, 1000);
setInterval(coloranimate,1000);
function coloranimate(){
	var dd = document.getElementById("day");
	var hh = document.getElementById("hours");
	var mm = document.getElementById("minutes");
	var ss = document.getElementById("seconds");
	var r1 = Math.floor(Math.random() * 256);
	var g1 = Math.floor(Math.random() * 256);
	var b1 = Math.floor(Math.random() * 256);
	var r2 = Math.floor(Math.random() * 256);
	var g2 = Math.floor(Math.random() * 256);
	var b2 = Math.floor(Math.random() * 256);
	var r3 = Math.floor(Math.random() * 256);
	var g3 = Math.floor(Math.random() * 256);
	var b3 = Math.floor(Math.random() * 256);
	var r4 = Math.floor(Math.random() * 256);
	var g4 = Math.floor(Math.random() * 256);
	var b4 = Math.floor(Math.random() * 256);
	dd.style.backgroundColor = "rgb("+r1+","+g1+","+b1+")";
	hh.style.backgroundColor = "rgb("+r2+","+g2+","+b2+")";
	mm.style.backgroundColor = "rgb("+r3+","+g3+","+b3+")";
	ss.style.backgroundColor = "rgb("+r4+","+g4+","+b4+")";
}