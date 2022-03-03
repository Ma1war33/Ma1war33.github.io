var morsecoderimg = document.getElementById("morsecoderimg");
var wordleimg = document.getElementById("wordleimg");

var showimages = true

if (window.innerWidth < 1250) {
    showimages = false
    morsecoderimg.style.opacity = "0";
    wordleimg.style.opacity = "0";
}
else {
    showimages = true
    morsecoderimg.style.opacity = "0";
    wordleimg.style.opacity = "1";
}

function windowsize() {
    if (window.innerWidth < 1250) {
        showimages = false
        morsecoderimg.style.opacity = "0";
        wordleimg.style.opacity = "0";
        console.log("Smaller")
    }
    else {
        showimages = true
        morsecoderimg.style.opacity = "0";
        wordleimg.style.opacity = "1";

        wordle
    }
}

addEventListener("resize", windowsize)


function morse() {
    if (showimages == true) {
        wordleimg.style.opacity = "1";
        morsecoderimg.style.opacity = "0";
    }
    setTimeout(wordle, 10000)
}
function wordle() {
    if (showimages == true) {
    wordleimg.style.opacity = "0";
    morsecoderimg.style.opacity = "1";
    }
    setTimeout(morse, 10000)
}

setTimeout(wordle, 10000)