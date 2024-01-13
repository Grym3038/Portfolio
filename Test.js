//Yasin sisto, 01.13.2024

var base = 10;

var answer = prompt("What is it giving on a scale of 1 to 10?");

var vibes = parseInt(answer)

var Total_vibes = base + vibes;

if (Total_vibes==20){
    // Gen Z humor
    alert("OMG PURRRR. GO OFF SIS")

} else {
    // not a good thing
    alert("the vibes aren't vibing")
    location.reload()
}

console.log("Vibes: " + vibes + '\n' + " Total Vibes: " + Total_vibes + '\n' + " Wanted Vibes: 20"


)