const computerchoicedisplay = document.getElementById("computer-choice");
const userchoicedisplay = document.getElementById("user-choice");
const resultdisplay = document.getElementById("results");
const possiblechoices = document.querySelectorAll("button");
let userchoice;

possiblechoices.forEach((possiblechoice) =>
  possiblechoice.addEventListener("click", (e) => {
    userchoice = e.target.id;
    userchoicedisplay.innerHTML = userchoice;
    generatecomputerchoice();
    compare();
  })
);
function generatecomputerchoice() {
  const randomnumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomnumber);
  if (randomnumber === 1) {
    computerchoice = "rock";
  }

  if (randomnumber === 2) {
    computerchoice = "paper";
  }
  if (randomnumber === 3) {
    computerchoice = "scissors";
  }
  computerchoicedisplay.innerHTML = computerchoice;
}
function compare() {
  if (userchoice === computerchoicedisplay.innerHTML) {
    result = "its a draw";
  }
  if (userchoice === "scissor" && computerchoice === "paper") {
    result = "user wins";
  }
  if (userchoice === "paper" && computerchoice === "scissor") {
    result = "computer wins";
  }
  if (userchoice === "paper" && computerchoice === "rock") {
    result = "computer wins";
  }
  if (userchoice === "rock" && computerchoice === "paper") {
    result = "user wins";
  }
  if (userchoice === "rock" && computerchoice === "scissor") {
    result = "user wins";
  }
  resultdisplay.innerHTML = result;
}
