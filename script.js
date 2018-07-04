var week = [
  "The weekend is over :(",
  "It's Monday? Gross!",
  "Taco Tuesday boiiii!",
  "It's Wednesday, my dudes. AAAAAAHHHHH!",
  "It's thirsty Thursday!",
  "Enjoy your weekend!",
  "It's Saturday! Turn up!"
];

var today = new Date();
var day = today.getDay();
var currentTime = today.getHours();
var greeting = "";
if (currentTime < 12) {
  greeting = "Good morning!";
} else if (currentTime < 16) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

document.getElementById("greeting").innerText = greeting + " " + week[day];

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", event => {
  hamburger.classList.toggle("active");
});

document.getElementById("tweet").innerHTML = "Loading tweet...";

fetch("https://purphub-api.herokuapp.com/tweets/random")
  .then(response => response.json())
  .then(function(data) {
    let tweet = data.tweet;
    let time = moment(data.date).format("MMMM Do YYYY, h:mm a");
    document.getElementById("tweet").innerHTML = tweet;
    document.getElementById("tweettime").innerHTML = time;
  })
  .catch(function(error) {
    document.getElementById("tweet").innerHTML =
      "Can't load tweet right now. I'm deeply sorry.";
  });
