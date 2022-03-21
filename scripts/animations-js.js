window_width = window.innerWidth;
program_info_div = document.getElementById("program-info-div");


function runonload() {
    program_info_div.style.animation = "pop-up 1s 0s forwards";
}

document.onload = runonload()