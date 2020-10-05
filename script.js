// GET ELEMENTS FROM THE DOM

const video = document.getElementById('video');
const play = document.getElementById('play');
const stopIt = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play and Pause Video
function toggleVideoStatus() {
  if(video.paused) {
    video.play()
  } else {
    video.pause();
  }
}

// Play/Pause Icon
function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML =  '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML =  '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update Progress and Time Stamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes 
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins ='0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Events Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopIt.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);




