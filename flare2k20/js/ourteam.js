setInterval(listtrav,6000);
setInterval(memtrav,6000);
list=0;
mem=0;
function listtrav() {
  list = list + 1;
  var i;
  var x = document.getElementsByClassName("ot");
  if (list >= x.length) {
		list = 0;
	  }
  if(list==0)
  {
	x[0].style.color = "white";
	x[0].style.marginLeft = "35%";
	x[x.length-1].style.color = "#FFB53C";
	x[x.length-1].style.marginLeft = "40%";
  }
  else{
	x[list].style.color = "white";
	x[list].style.marginLeft = "35%";
	x[list-1].style.color = "#FFB53C";
	x[list-1].style.marginLeft = "40%";
  }
    
}

function memtrav() {
  mem = mem + 1;
  var i;
  var x = document.getElementsByClassName("mem");
  if (mem >= x.length) {
		mem = 0;
	  }
  if(mem==0)
  {
	x[0].style.opacity = "1";
	x[0].style.zIndex = "13";
	x[0].style.transition = "all 1s";
	x[x.length-1].style.opacity = "0";
	x[x.length-1].style.zIndex = "12";
  }
  else{
	x[mem].style.opacity = "1";
	x[mem].style.zIndex = "13";
	x[mem].style.transition = "all 1s";
	x[mem-1].style.opacity = "0";
	x[mem-1].style.zIndex = "12";
  }
    
}
var nsec=0;
function changelistmem(nsec){
	var x = document.getElementsByClassName("mem");
	var y = document.getElementsByClassName("ot");
	x[mem].style.opacity = "0";
	x[mem].style.zIndex = "12";
	y[list].style.color = "#FFB53C";
	y[list].style.marginLeft = "40%";
	mem = nsec;
	list = nsec;
	x[mem].style.opacity = "1";
	x[mem].style.zIndex = "13";
	x[mem].style.transition = "all 1s";
	y[list].style.color = "white";
	y[list].style.marginLeft = "35%";
}