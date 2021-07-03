setInterval(slideshow,3000);
slide=0;
function slideshow() {
  slide = slide + 1;
  var slidex = document.getElementsByClassName("slide");
  if (slide >= slidex.length) {
		slide = 0;
	  }
  if(slide==0)
  {
	slidex[slidex.length-2].style.left = "-110%";
	slidex[slidex.length-1].style.left = "-45%";
	slidex[0].style.left = "20%";
	slidex[1].style.left = "85%";
	slidex[2].style.left = "150%";
	slidex[2].style.opacity = "0";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(4px)";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(0)";
	slidex[1].style.opacity = "1";
	slidex[1].style.filter = "blur(4px)";
	slidex[slidex.length-2].style.transition = "left 2s";
	slidex[slidex.length-1].style.transition = "2s";
	slidex[0].style.transition = "2s";
	slidex[1].style.transition = "2s";
  }
  else if(slide==1)
  {
	slidex[slidex.length-1].style.left = "-110%";
	slidex[0].style.left = "-45%";
	slidex[1].style.left = "20%";
	slidex[2].style.left = "85%";
	slidex[3].style.left = "150%";
	slidex[3].style.opacity = "0";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(4px)";
	slidex[1].style.opacity = "1";
	slidex[1].style.filter = "blur(0)";
	slidex[2].style.opacity = "1";
	slidex[2].style.filter = "blur(4px)";
	slidex[slidex.length-1].style.transition = "left 2s";
	slidex[0].style.transition = "2s";
	slidex[1].style.transition = "2s";
	slidex[2].style.transition = "2s";
  }
  else if(slide==slidex.length-1)
  {
	slidex[slidex.length-3].style.left = "-110%";
	slidex[slidex.length-2].style.left = "-45%";
	slidex[slidex.length-1].style.left = "20%";
	slidex[0].style.left = "85%";
	slidex[1].style.left = "150%";
	slidex[1].style.opacity = "0";
	slidex[slidex.length-2].style.opacity = "1";
	slidex[slidex.length-2].style.filter = "blur(4px)";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(0)";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(4px)";
	slidex[slidex.length-3].style.transition = "left 2s";
	slidex[slidex.length-2].style.transition = "2s";
	slidex[slidex.length-1].style.transition = "2s";
	slidex[0].style.transition = "2s";
  }
  else if(slide==slidex.length-2)
  {
	slidex[slidex.length-4].style.left = "-110%";
	slidex[slidex.length-3].style.left = "-45%";
	slidex[slidex.length-2].style.left = "20%";
	slidex[slidex.length-1].style.left = "85%";
	slidex[0].style.left = "150%";
	slidex[0].style.opacity = "0";
	slidex[slidex.length-3].style.opacity = "1";
	slidex[slidex.length-3].style.filter = "blur(4px)";
	slidex[slidex.length-2].style.opacity = "1";
	slidex[slidex.length-2].style.filter = "blur(0)";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(4px)";
	slidex[slidex.length-4].style.transition = "left 2s";
	slidex[slidex.length-3].style.transition = "2s";
	slidex[slidex.length-2].style.transition = "2s";
	slidex[slidex.length-1].style.transition = "2s";
  }
  else
  {
	slidex[slide-2].style.left = "-110%";
	slidex[slide-1].style.left = "-45%";
	slidex[slide].style.left = "20%";
	slidex[slide+1].style.left = "85%";
	slidex[slide+2].style.left = "150%";
	slidex[slide+2].style.opacity = "0";
	slidex[slide-1].style.opacity = "1";
	slidex[slide-1].style.filter = "blur(4px)";
	slidex[slide].style.opacity = "1";
	slidex[slide].style.filter = "blur(0)";
	slidex[slide+1].style.opacity = "1";
	slidex[slide+1].style.filter = "blur(4px)";
	slidex[slide-2].style.transition = "left 2s";
	slidex[slide-1].style.transition = "2s";
	slidex[slide].style.transition = "2s";
	slidex[slide+1].style.transition = "2s";
  }
      
}