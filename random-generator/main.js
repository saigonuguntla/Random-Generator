var countries = ["Belgium", "France", "Switzerland", "Japan", "Ireland", "Singapore", "India", "New Zealand", "South Africa"];

document.getElementById("button").innerHTML = "Get Countries";
var button = document.getElementById("button");

button.addEventListener("click", function () {
var randomNum = Math.random();
var randomNumBig = randomNum * countries.length;
var randomRound = Math.floor(randomNumBig);
console.log(randomNum);
console.log(randomNumBig);
console.log(countries[randomRound]);
document.querySelector("h3").innerHTML = (countries[randomRound]);
})
