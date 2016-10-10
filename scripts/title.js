function animate_title() {

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;

  // Making font smaller on mobile
  if (canvas.width < 800) {
    var min_letter_size = 45;
  } else {
    var min_letter_size = 120;
  }

  // This object represents a single letter from the characters array (which contains the letters for the word 'JUNGLE').
  function Letter(letter, x) {
    this.value = letter;
    this.size = Math.floor(Math.random() * min_letter_size) + 35;
    this.x = x;
    this.y = 0;
    // velocity Y == random # between 1 and 10
    this.vy = Math.random() * 10 + 1;
    this.gravity = 0.1;
    this.bounceFactor = 0.7;

    this.updatePosition = function() {
      // Every time the position is updated, vy will be increased by gravity
      this.vy += this.gravity;
      // if velocity > 0 { ball drops }
      this.y += this.vy;

      if (this.y >= canvas.height - 20) {
        // letters hit bottom
        this.y = canvas.height - 20;
        // new vy will be a negative velocity so that it goes up (negative goes up)
        // It's always adding up gravity so it eventually stops
        this.vy *= -this.bounceFactor;
      }
    }

    // Draws the letter
    this.draw = function() {
      var gradient = context.createLinearGradient(0, 0, 0, 260);
      gradient.addColorStop(0, '#11772D');
      gradient.addColorStop(0.5, '#CDDC39');
      gradient.addColorStop(0.7, '#43A047');
      gradient.addColorStop(1, '#9E9D24');
      context.fillStyle = gradient;
      context.font = this.size + "px Oswald";
      context.fillText(this.value, this.x, this.y);
    };
  }

  var middle = window.innerWidth / 2;
  var character_width = min_letter_size + 10;

  var characters = [];
  characters.push(new Letter('J', (middle - (character_width * 3))));
  characters.push(new Letter('U', (middle - (character_width * 2))));
  characters.push(new Letter('N', (middle - (character_width * 1))));
  characters.push(new Letter('G', (middle + (character_width * 0))));
  characters.push(new Letter('L', (middle + (character_width * 1))));
  characters.push(new Letter('E', (middle + (character_width * 2))));

  (function draw() {
    // Used requestAnimationFrame instead of setInterval. This method calls the draw function every time the browser is ready to repaint the screen.
    requestAnimationFrame(draw);
    context.fillStyle = 'rgba(33, 33, 33, 0.4)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    characters.forEach(function(letter) {
      letter.updatePosition();
      letter.draw();
    });
  // call function right away
  }());

}
