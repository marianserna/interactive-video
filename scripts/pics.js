// When clicking on pics link
function picsLinkClick() {
  hideAllPages();
  showPicsPage();
  playSong('assets/Dark_Fog.mp3');
  playClick();
  showHamburger();
}

function showPicsPage() {
  var picsPage = document.getElementById('pics');
  picsPage.style.display = 'flex';
  currentPage = 'pics';
}

function showInfo(div) {
  // dataset accesses the data-description attribute of the dom element passed to this function (onclick="showInfo(this);")
  var information = div.dataset.description;
  var details = document.getElementById('image_details');
  details.innerHTML = '<p>' + information + '</p>';
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
}

function closeInfo() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}
