const timeDisplay = document.querySelector("#time-display");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let millisecs = 0;

startBtn.addEventListener("click", () => {
if(paused){
  paused = false;
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 1000);
}
})
pauseBtn.addEventListener("click", () => {
  if(!paused){
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
})
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  hrs = 0;
  mins = 0;
  secs = 0;
  msecs = 0;

  timeDisplay.textContent = "00:00:00:000";
})

function updateTime(){
   elapsedTime = Date.now() - startTime;

   msecs = Math.floor((elapsedTime % 60 * 10));
   secs = Math.floor((elapsedTime / 1000) % 60);
   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

   secs = pad(secs);
   mins = pad(mins);
   hrs = pad(hrs);
   msecs = pad(msecs);

   timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msecs}`

   function pad(unit){
    return(("0") + unit).length > 2 ? unit : "0" + unit
   }
  }