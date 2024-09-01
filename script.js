let won = 0, lost = 0, round = 1, situation = 0;
let victory = "Victory! You won the game!";
let defeat = "Try again. You lost the game!";

function choose(a) {
  let comp = Math.round(Math.random() * 2) + 1; //1=rock, 2=paper, 3=scissors
  let comp_choice;

  //transform the PC choice from number into word
  switch(comp) {
    case 1:
      comp_choice = "Rock";
      break;
    case 2:
      comp_choice = "Paper";
      break;
    default:
      comp_choice = "Scissors";
  }
  document.getElementById("pc").innerHTML = comp_choice;

  //transform your choice from number into word
  let your_choice;
  switch(a) {
    case 1:
      your_choice = "Rock";
      break;
    case 2:
      your_choice = "Paper";
      break;
    default:
      your_choice = "Scissors";
  }
  
  //playing each round
  if (a == comp) {
    situation = `'I also chose ${comp_choice}. It's a tie!`;
  } else if (a == 1 && comp == 2 || a == 2 && comp == 3 || a == 3 && comp == 1) {
    situation = `You lost this round! ${comp_choice} beats ${your_choice}.`;
    lost++;
  } else {
    situation = `You won this round! My choice was ${comp_choice}.`;
    won++;
  }
  round++;

  //testing if the game ends or not
  if( won == 5 || lost == 5) {
    if (won == 5) {
      document.getElementById("your_score_n").innerHTML = won;
      document.getElementById("winner").innerHTML = victory;
      document.getElementById("winner").style.fontSize = "21px";
      document.getElementById("restart").classList.add("ok");
      document.getElementById("end_game").style.display = "block";
      return;
    } else if (lost == 5) {
      document.getElementById("my_score_n").innerHTML = lost;
      document.getElementById("winner").innerHTML = defeat;
      document.getElementById("winner").style.fontSize = "21px";
      document.getElementById("restart").classList.add("ok");
      document.getElementById("end_game").style.display = "block";
      return;
    }
  }

    //displaying the result
    document.getElementById("winner").style.visibility = "visible";
    document.getElementById("round_n").innerHTML = round;
    document.getElementById("your_score_n").innerHTML = won;
    document.getElementById("my_score_n").innerHTML = lost;
    document.getElementById("winner").innerHTML = situation;
}
//Restart button
function restart() {
  document.getElementById("winner").style.visibility = "hidden";
  document.getElementById("round_n").innerHTML = 1;
  document.getElementById("your_score_n").innerHTML = 0;
  document.getElementById("my_score_n").innerHTML = 0;
  document.getElementById("winner").style.fontSize = "18px";
  document.getElementById("restart").classList.remove("ok");
  document.getElementById("end_game").style.display = "none";
  won = lost = 0, round = 1;
}

//Rules modal
function rules() {
  document.getElementById("container_rules").style.display = "block";
}

function closed() {
  document.getElementById("container_rules").style.display = "none";
}