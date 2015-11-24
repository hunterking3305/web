function doFirst(){
	barSize = 606;
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
//	myTrack = document.getElementById('myTrack');
	
	playButton.addEventListener('click',playOrPause,false);
	defaultBar.addEventListener('click',clickedBar,false);
	myMovie.addEventListener('click',playOrPause,false);
//	myTrack.addEventListener('click',showTrack,false);
}
function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){		//影片正在play...
		myMovie.pause();
		playButton.innerHTML = 'Play';
	}else{		//影片暫停中或影片結束...
		myMovie.play();
		playButton.innerHTML = 'Pause';
		setInterval(update,400);
	}
}
function update(){
	if(!myMovie.ended){
		var size = (barSize / myMovie.duration) * myMovie.currentTime;
		progressBar.style.width = size + 'px';
	}else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
	}
}
function clickedBar(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX * myMovie.duration / barSize;
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX + 'px';
}
/* function showTrack(){
	var track1 = myMovie.textTracks[0];
} */

window.addEventListener('load',doFirst,false);