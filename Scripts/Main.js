// JavaScript Document
var video = document.getElementById("myVideo");
var ButtonPlay = document.getElementById("btnPlay");
var ButtonStop = document.getElementById("btnStop");
var tiempo = null;
var Button_1 = document.getElementById("btn1");
var Button_2 = document.getElementById("btn2");
var Button_3 = document.getElementById("btn3");
var Button_4 = document.getElementById("btn4");
var Button_Back = document.getElementById("btnBack");
var controlVideo = 0;
function main(){
console.log("Este trabajo se merece un 5");
	
	
	
video.ontimeupdate = function(){
console.log(tiempo);
tiempo = video.currentTime; 	
if(tiempo>=6 && controlVideo ==0){
	showButtons();
}
	if(controlVideo !==0){
		ButtonBack();	
}
	
}

function playVideo(){
   video.play();
}
	
function stopVideo(){
	video.pause();
}	

function showButtons(){
	document.getElementById("btn1").style.display="inline";
	document.getElementById("btn2").style.display="inline";
	document.getElementById("btn3").style.display="inline";
	document.getElementById("btn4").style.display="inline";
}
	
function hideButtons(){
	document.getElementById("btn1").style.display="none";
	document.getElementById("btn2").style.display="none";
	document.getElementById("btn3").style.display="none";
	document.getElementById("btn4").style.display="none";
}

	
ButtonPlay.addEventListener("click",playVideo);
ButtonStop.addEventListener("click",stopVideo);
	
Button_1.addEventListener("click",changeVideo1);

function changeVideo1(){
	video.src="Videos/Video_1.mp4"; 
	video.load();
	video.play();
	hideButtons();
	controlVideo=1;
  }
	
Button_2.addEventListener("click",changeVideo2);

function changeVideo2(){
	video.src="Videos/Video_1.mp4"; 
	video.load();
	video.play();
	hideButtons();
	controlVideo=2;
  }
Button_3.addEventListener("click",changeVideo3);

function changeVideo3(){
	video.src="Videos/Video_1.mp4"; 
	video.load();
	video.play();
	hideButtons();
	controlVideo=3;
  }

Button_4.addEventListener("click",changeVideo4);	
function changeVideo4(){
	video.src="Videos/Video_1.mp4"; 
	video.load();
	video.play();
	hideButtons();
	controlVideo=4;
  }	

function hideButtonBack(){
	document.getElementById("btnBack").style.display="none";	
}
function showButtonBack(){
	document.getElementById("btnBack").style.display="inline";
}
	
function ButtonBack(){
	
if(controlVideo==0){
		hideButtonBack();
	}
	else{
		showButtonBack();
	}	
	

}	

Button_Back.addEventListener("click",changeVideoBack);	
function changeVideoBack(){
	video.src="Videos/video interactivo.mp4"; 
	video.load();
	video.play();
	hideButtonBack();
	controlVideo=0;
  }		
	
}


