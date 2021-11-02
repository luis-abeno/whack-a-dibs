import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  var game = {
    timeLeft: document.getElementById('time_left').innerText
  };

  var user = {
    score: parseInt(document.getElementById('user_score').innerText)
  };

  /// Draw moly at random box from 1 to 12
  function drawMoly() {
    let min = Math.ceil(1);
    let max = Math.floor(12);
    let hole = Math.floor(Math.random() * (max - min + 1)) + min;

    clearHoles();

    let elem = document.getElementsByClassName(`hole ${hole}`)[0];
    let mole = document.createElement('img');
    mole.src = './img/dibs.png';
    mole.addEventListener('click', smashedDibs);
    elem.appendChild(mole);
  }

  /// When dibs is smashed
  function smashedDibs() {
    updateScore();
    clearHoles();
  }

  /// Track user score
  function updateScore() {
    user.score++;

    document.getElementById('user_score').innerText = user.score;
  }

  /// Clear holes
  function clearHoles() {
    var holes = document.getElementsByClassName('hole');
    for (let i = 0; i < holes.length; i++) {
      if (holes[i].hasChildNodes()) {
        holes[i].innerHTML = '';
      }

    }
  }

  function timeLeft() {
    let timeLeft = game.timeLeft--;
    document.getElementById('time_left').innerText = timeLeft;

    if (timeLeft == 0) {
      alert("Game Over! Your score is: " + user.score);
      document.getElementById('user_score').innerText = 0;
      user.score = 0;
      game.timeLeft = 10;
      clearInterval();
    }
  }

  setInterval(() => {
    drawMoly();
    timeLeft();
  }, 1000);

});
