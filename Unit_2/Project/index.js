var minionsContainer = document.getElementById("minions-container");

var minions = [];
let audio = document.getElementById("myAudio");
let audio2 =document.getElementById("audio2");
const playBtn = document.getElementById('addButton');
var count = 0;
var heading = document.querySelector("h1");
var subHeading = document.querySelector("p");
var marchBtn = document.getElementById("marchBtn");


function addMinion() {
  var minion = document.createElement("div");
  var numb = Math.floor(Math.random() * 8);
  count += 1;
  minions.push(minion);
  minionsContainer.appendChild(minion);
  if (heading.classList.contains("light")){
    minion.className = "minion"+ " d"+ numb + " light";

    audio2.play();
  }
  else{
    minion.className = "minion"+ " d"+ numb + " dark";

    audio.play();

  }
  if (count > 10) {
    for(let i = 0; i < minions.length; i++) {
      minions[i].classList.add('shake');
    }
  }
}

function removeMinion() {
  if (minions.length > 0) {
    var minion = minions.pop();
    minionsContainer.removeChild(minion);
  }
}






document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("addButton").addEventListener("click", addMinion);
  document.getElementById("removeButton").addEventListener("click", removeMinion);
  
});
function march() {
  for(let i = 0; i < minions.length; i++) {
    minions[i].classList.add('march');
  }
  };



function themeChange() {
  var elements = document.querySelectorAll("body, h1, div, button, p");

  elements.forEach(function(element) {
    element.classList.toggle('dark');
    element.classList.toggle('light');
 

  });


  if (heading.classList.contains("light")){
    heading.innerText = "Let there be light!!!";
    subHeading.innerText = "(holiness goes brr.)"
    marchBtn.style.display = "none";
    }
    else {
    heading.innerText = "THE QUACK SHALL RULE!!!";
    subHeading.innerText = "(In order to conquer the world you need minions)";
    marchBtn.style.display = "block";

  }
};

