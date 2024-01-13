//Yasin sisto, 01.13.2024

var base = 10;

var vibes = prompt("What is it giving on a scale of 1 to 10?");

var more_vibes = parseInt(vibes)

vibes = base + more_vibes;

if (vibes==20){
    // Gen Z humor
    alert("OMG PURRRR. GO OFF SIS")

} else {
    // not a good thing
    alert("the vibes arem't vibing")

}

console.log("The \" vibes \" should've been 10 and you answered:" + vibes)