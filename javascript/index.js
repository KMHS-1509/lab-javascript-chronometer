const chronometer = new Chronometer();
let intervalId = 0

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes ();
  printSeconds ();

}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

}

function printSeconds() {
  // ... your code goes here
  secDecElement.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  secUniElement.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li');
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className.remove("stop");
  btnLeftElement.className.add ("star");
  btnLeftElement.innerHTML = "STOP";

}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className.remove ("split");
  btnRightElement.className.add ("reset");
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  chronometer.stopClick ();
  btnLeftElement.className.remove("star");
  btnLeftElement.className.add("stop");
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className.remove ("reset");
  btnRightElement.className.add ("split");
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML = "start"){
    chronometer.startClick(printTime);
    setStopBtn ();
    setSplitBtn ();
    return;
  } else 
  {
    setStartBtn ();
    setResetBtn ();
  }
   
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML == "reset") {
    clearSplits();
    clearClock ();
    chronometer.resetClick();
  } else {
    printSplit();
  }
  // ... your code goes here
});
