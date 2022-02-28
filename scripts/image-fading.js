var morsecoderimg = document.getElementById("morsecoderimg");
var wordleimg = document.getElementById("wordleimg");


function morse() {
    wordleimg.style.opacity = "1";
    morsecoderimg.style.opacity = "0";
    setTimeout(wordle, 10000)
}
function wordle() {
    wordleimg.style.opacity = "0";
    morsecoderimg.style.opacity = "1";
    setTimeout(morse, 10000)
}

setTimeout(wordle, 10000)
