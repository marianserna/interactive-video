// Set global variables
var music,
  click,
  map,
  currentPage;

function hideAllPages() {
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  // Clicking on a menu item while watching the video should pause and reset video to initial point.
  if (currentPage == 'video') {
    var video = document.getElementById('aboriginal_video');
    video.pause();
    video.currentTime = 0;
  }
  closeNav();
}

function showHamburger() {
  var hamburger = document.getElementById('hamburger-nav');
  hamburger.style.display = 'block';
}

function hideHamburger() {
  var hamburger = document.getElementById('hamburger-nav');
  hamburger.style.display = 'none';
}

// Close menu or info window with esc
document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    closeNav();
    closeInfo();
  }
}

// Create audio tag for background music
function createMusic() {
  music = document.createElement('audio');
  document.body.appendChild(music);
}

// Change song and play it
function playSong(song) {
  music.setAttribute("src", song);
  music.play();
}
function pauseSong() {
  music.pause();
}

// Create audio tag for click sound
function createClick() {
  click = document.createElement('audio');
  click.setAttribute("src", "assets/click.mp3");
  document.body.appendChild(click);
}

// When clicking to fast, audio doesn't play the 2nd time (cuz it's still running). This function pauses the click, takes the track to the beginning, then plays it back.
function playClick() {
  click.pause();
  click.currentTime = 0;
  click.play();
}

// Setup initial landing page
window.onload = function() {
  createMusic();
  createClick();
  playSong('assets/Feral_Chase.mp3');
  showLandingPage();
  animate_title();
  hideHamburger();
};
