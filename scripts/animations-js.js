window_width = window.innerWidth;
program_info_div = document.getElementById("program-info-div");

gallery = document.getElementById("gallery");
foreground_programinfo = document.getElementById("foreground-programinfo");
loading_page = document.getElementById("loading-page");

main_page = document.getElementById("main_page");
navbar = document.getElementById("navbar");


loading_page.style.animation = "fade-out 0.4s 0s";
main_page.style.animation = "large_pop_up 1s 0s forwards cubic-bezier(0,.91,.26,1)";
program_info_div.style.animation = "fade-in 1s 0s forwards";
loading_page.style.zIndex = "-1";

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