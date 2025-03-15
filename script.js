let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  function theGame(myMove) {
    let randomNumber = Math.random();

    let linuxPLay = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
      linuxPLay = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      linuxPLay = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
      linuxPLay = 'scissors';
    }

    let result = '';

    if (myMove === 'Rock') {
      if (linuxPLay === 'rock') {
        result = 'Tie';
      } else if (linuxPLay === 'paper') {
        result = 'You Lose'
      } else if (linuxPLay === 'scissors') {
        result = 'You Win'
    }
  } else if (myMove === 'Paper') {
    if (linuxPLay === 'rock') {
        result = 'You Win';
      } else if (linuxPLay === 'paper') {
        result = 'Tie'
      } else if (linuxPLay === 'scissors') {
        result = 'You Lose'
    }
  } else if (myMove === 'Scissors') {
    if (linuxPLay === 'rock') {
        result = 'You Lose';
      } else if (linuxPLay === 'paper') {
        result = 'You Win'
      } else if (linuxPLay === 'scissors') {
        result = 'Tie'
    }
  }
  
  if (result === 'You Win') {
    score.wins +=1;
  } else if (result === 'You Lose') {
    score.losses +=1;
  } else if (result === 'Tie') {
    score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score))


document.getElementById('player'). innerText = `You Picked: ${myMove}`
  document.getElementById('computer'). innerText = `Computer Picked: ${linuxPLay}`
  document.getElementById('outcome'). innerText = `Outcome: ${result}`
  document.getElementById('scores'). innerText = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`
}