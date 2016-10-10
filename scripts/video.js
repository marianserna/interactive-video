// When clicking on video link
function videoLinkClick() {
  hideAllPages();
  showVideoPage();
  playSong('assets/I_Am_a_Man_Who_Will_Fight_for_Your_Honor.mp3');
  playClick();
  showHamburger();
  playAboriginalVideo();
}

function playAboriginalVideo() {
  var video = document.getElementById('aboriginal_video');
  video.play();

  var subtitles = document.getElementById('subtitles');

  var translations = [
    {start:33, end:34, content: 'We have a lot to do.'},
    {start:35, end:36, content: 'We are in a tech world'},
    {start:37, end:40, content: 'Ask around, we go beyond what books teach, but also beyond what our ancesters did'},
    {start:41, end:43, content: 'We go beyond what universities teach'},
    {start:50, end:53, content: 'We are in a tech world and we are trying to be better.'},
    {start:54, end:56, content: 'Every day we are studying.'},
    {start:57, end:58, content: 'At least I am.'},
    {start:63, end:65, content: 'History has a beginning but it has no end.'}
  ];

  subtitles.style.display = 'block';

  video.ontimeupdate = function() {
    subtitles.innerHTML = '';
    var seconds = Math.floor(video.currentTime);

    for (var i = 0; i < translations.length; i++) {
      if (seconds >= translations[i].start && seconds <= translations[i].end) {
        subtitles.innerHTML = translations[i].content;
        // To position the subtitles over the video, I brought the subtitle to the middle of the screen, then calculated the height of the video subtracted 85px from its half.
        subtitles.style.top = 'calc(50% + ' + Math.floor(video.clientHeight / 2 - 85) + 'px)';
        break;
      }
    }
  };
}

function showVideoPage() {
  var videoPage = document.getElementById('video');
  videoPage.style.display = 'block';
  currentPage = 'video';
}
