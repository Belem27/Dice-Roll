
//Random img1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6
var randomImage1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
//img1 Attribute
var img1Attribute = document.querySelector(".img1");
img1Attribute.setAttribute("src", randomImage1);

//Random img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1 - 6
var randomImage2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
//img2 Attribute
var img2Attribute = document.querySelector(".img2");
img2Attribute.setAttribute("src", randomImage2);

//Title display winner
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
