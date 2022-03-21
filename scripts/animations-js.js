window_width = window.innerWidth;
program_info_div = document.getElementById("program-info-div");


function runonload() {
    program_info_div.style.animation = "fade-in 1s 0.5s forwards";
}

document.onload = runonload()