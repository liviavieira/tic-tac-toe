let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#btn-container button');
let msgContainer = document.querySelector('#message');
let msgText = document.querySelector('#message p');
let secondPlayer;

// count the moves
let player1 = 0;
let player2 = 0;

for(let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    let el = checkEl(player1, player2);

    if(this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      if(player1 == player2) {
        player1++
      } else {
        player2++
      }

      checkWinCondition();
    }
  });
}

// pass the action to the next player
function checkEl(p1, p2) {
  if(p1 == p2) {
    el = x;
  } else {
    el = o;
  }

  return el;
}

// analyzes possible combinations and calculates the winner
function checkWinCondition() {
  let b1 = document.getElementById('block-1');
  let b2 = document.getElementById('block-2');
  let b3 = document.getElementById('block-3');
  let b4 = document.getElementById('block-4');
  let b5 = document.getElementById('block-5');
  let b6 = document.getElementById('block-6');
  let b7 = document.getElementById('block-7');
  let b8 = document.getElementById('block-8');
  let b9 = document.getElementById('block-9');

  // -- horizontal combinations --
  // row 1
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declareWinner('x')
    } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declareWinner('o')
    }
  }

  // row 2
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      declareWinner('x')
    } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      declareWinner('o')
    }
  }

  // row 3
  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      declareWinner('o')
    }
  }

  // -- vertical combinations --
  // column 1
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      declareWinner('x')
    } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      declareWinner('o')
    }
  }

  // column 2
  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      declareWinner('x')
    } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      declareWinner('o')
    }
  }

  // column 3
  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      declareWinner('o')
    }
  }

  // -- diagonal combinations --
  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      declareWinner('x')
    } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      declareWinner('o')
    }
  }

  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      declareWinner('o')
    }
  }

  // tie
  let counter = 0;
  
  for(let i = 0; i < boxes.length; i++) {
    if(boxes[i].childNodes[0] != undefined) {
      counter++
    }
  }
  if(counter == 9) {
    declareWinner('velha');
  }
}

// reveals the winner, updates the score and restarts the game
function declareWinner(winner) {
  let scoreboardX = document.querySelector('#score-1');
  let scoreboardY = document.querySelector('#score-2');
  let msg = '';
  
  if(winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'O jogador 1 venceu a partida!';
  } else if(winner == 'o') {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = 'O jogador 2 venceu a partida!';
  } else {
    msg = 'Deu velha!';
  }

  // displays the message
  msgText.innerHTML = msg;
  msgContainer.classList.remove('hide');

  // hides the message
  setTimeout(function() {
    msgContainer.classList.add('hide');
  }, 3000)

  // clear the moves
  player1 = 0;
  player2 = 0;
  let boxesToRemove = document.querySelectorAll('.box div');

  for(let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}