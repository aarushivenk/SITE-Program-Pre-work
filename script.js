// global constants
const cluePauseTime = 1000; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence



Math.random;

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var min = 1;
var max = 6;
var mistakes = 0;
var timeLeft = 0;
var elem = document.getElementById("timerBtn");
var timerId = setInterval(countdown, 1000);


function startGame() {
  //initialize game variables
  context.resume();
  timeLeft = 100;
  mistakes += 1;
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timerBtn").classList.remove("hidden");
  mistakes = 0;
  generatePattern();
  playClueSequence();
}

function generatePattern() {
  for (let i = 0; i <= 7; i++) {
    pattern.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timerBtn").classList.add("hidden");
  timeLeft = 100;
  
}

// Sound Synthesis Functions
// const freqMap = {
//   1: 100,
//   2: 200,
//   3: 300,
//   4: 400, 
//   5: 500, 
//   6:600, 
//   7:700,
//   8:800,
// }

const audioMap = {
  1: document.getElementById("audio1"),
  2: document.getElementById("audio2"), 
  3: document.getElementById("audio3"), 
  4: document.getElementById("audio4"), 
  5: document.getElementById("audio5"),
  6: document.getElementById("audio6"), 
  // 7: document.getElementById("audio7"), 
  // 8: document.getElementById("audio8")
}

// const imageMap = {
//   1: document.getElementById("image1"),
//   2: document.getElementById("image2"), 
//   3: document.getElementById("image3"), 
//   4: document.getElementById("image4"), 
//   5: document.getElementById("image5"),
//   6: document.getElementById("image6"), 
//   7: document.getElementById("image7"), 
//   8: document.getElementById("image8")
// }


function playTone(btn,len){ 
   startTone(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  audioMap[btn].play();
}
                                                           

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}



function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
 
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");

}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= i * 5;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over 😢 You lost.");
  clueHoldTime = 1000;
  pattern = [];
  timeLeft = 100;
}

function winGame() {
  stopGame();
  alert("Game Over 🥳 You won!");
  clueHoldTime = 1000;
  pattern = [];
  timeLeft = 100;
}

function guess(btn) {
  console.log("user guessed: " + btn);
  // var timerId = setInterval(countdown, 1000);
  //timeLeft --;
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    mistakes += 1;
    if (mistakes < 3) {
      alert("Oops! 😬 Try that one again.");
      playClueSequence();
    }
    if (mistakes == 3) {
      loseGame();
    }
  }
}

function countdown() {
  
  if (gamePlaying == true) {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    loseGame();
    
    }
  else {
    elem.innerHTML = "⏳ " + timeLeft;
    timeLeft--;
  }
}
}

//Page Initialization
// Init Sound Synthesizer
 context = new AudioContext();

var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
