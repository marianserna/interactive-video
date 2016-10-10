// When clicking on home link
function landingLinkClick() {
  hideAllPages();
  showLandingPage();
  playSong('assets/Feral_Chase.mp3');
  playClick();
  hideHamburger();
}

function showLandingPage() {
  var landingPage = document.getElementById('landing');
  landingPage.style.display = 'block';
  currentPage = 'landing';
}
