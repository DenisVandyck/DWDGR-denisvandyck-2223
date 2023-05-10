let videoElem = document.getElementById('myVideo');
let skipStart = document.getElementById('skip-start-button');
let skipBackward = document.getElementById('skip-backward-button');
let playButton = document.getElementById('play-button');
let pauseButton = document.getElementById('pause-button');
let stopButton = document.getElementById('stop-button');
let skipForward = document.getElementById('skip-forward-button');
let skipEnd = document.getElementById('skip-end-button');

async function playVideo() {
	try {
		await videoElem.play();
		playButton.classList.add('playing');
	} catch (err) {
		playButton.classList.remove('playing');
	}
}

function handlePlayButton() {
	playVideo();
}

function handlePauseButton(){
	videoElem.pause();
}

function handleStopButton(){
	videoElem.pause();
	videoElem.currentTime = 0;
}

function handleSkipForward(){
	videoElem.currentTime = videoElem.currentTime + 10;
}

function handleSkipEnd(){
	videoElem.currentTime = 500;
}

function handleSkipStart(){
	videoElem.currentTime = 0;
}

function handleSkipBackward(){
	videoElem.currentTime = videoElem.currentTime - 10;
}

playButton.addEventListener('click', handlePlayButton, false);
playVideo();

pauseButton.addEventListener('click', handlePauseButton, false);
stopButton.addEventListener('click', handleStopButton, false);
skipForward.addEventListener('click', handleSkipForward, false);
skipEnd.addEventListener('click', handleSkipEnd, false);
skipStart.addEventListener('click', handleSkipStart, false);
skipBackward.addEventListener('click', handleSkipBackward, false);

