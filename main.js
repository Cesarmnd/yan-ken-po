var userChoice = 'scissors';
var computerChoice = 'rock';

function compareChoise(userChoice, computerChoice) {

  let result = userChoice == computerChoice ? 'Draw' :  
  (userChoice == 'scissors' && computerChoice == 'paper' || 
    userChoice == 'paper' && computerChoice == 'rock' || 
    userChoice == 'rock' && computerChoice == 'scissors') ? 'Win': 
    'Lost';

  return result
};

compareChoise(userChoice, computerChoice);