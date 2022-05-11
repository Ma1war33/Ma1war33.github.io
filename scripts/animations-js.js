window_width = window.innerWidth;
program_info_div = document.getElementById("program-info-div");

foreground_programinfo = document.getElementById("foreground-programinfo");


function runonload() {
    program_info_div.style.animation = "pop-up 1s 0.5s forwards";
}

window.addEventListener("load", event =>{
    isLoaded = gallery.style.content.complete && gallery.style.content.naturalHeight !== 0;
    runonload()
    alert("Image Loaded.")
});

function repositioning() {
    if (window.innerWidth > 839) {
        foreground_programinfo.style.height = "calc(80px + 9vw)";
    }
    else {
        foreground_programinfo.style.height = "calc(80px + 12vw)";
    }
}

repositioning()
window.addEventListener("resize", repositioning);