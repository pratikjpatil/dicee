
var randomNumber1 = Math.floor(Math.random()*6) + 1; //generating random no from 1-6
var randomImg = "images/dice" + randomNumber1 +".png"; //generating specified path with dice img
document.querySelectorAll("img")[0].setAttribute("src", randomImg); //adding that path


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImg2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


//        we can use this mathod also

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// function changeLeft() {
//   if (randomNumber1 === 1) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
//   } else if (randomNumber1 === 2) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
//   } else if (randomNumber1 === 3) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
//   } else if (randomNumber1 === 4) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
//   } else if (randomNumber1 === 5) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");
//   } else if (randomNumber1 === 6) {
//     document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
//   }
// }
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// function changeRight() {
//   if (randomNumber2 === 1) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");
//   } else if (randomNumber2 === 2) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");
//   } else if (randomNumber2 === 3) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");
//   } else if (randomNumber2 === 4) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");
//   } else if (randomNumber2 === 5) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice5.png");
//   } else if (randomNumber2 === 6) {
//     document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
//   }
// }
//
// changeLeft();
// changeRight();

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
