window_width = window.innerWidth;
program_info_div = document.getElementById("program-info-div");

foreground_programinfo = document.getElementById("foreground-programinfo");
loading_page = document.getElementById("loading-page");

main_page = document.getElementById("main_page");
navbar = document.getElementById("navbar");

loading_message = document.getElementById("loading_message");

function still_loading(){
    loading_message.style.animation = "fade-in 0.5s 0s forwards";
}

function sleep1 (){
    loading_page.style.zIndex = "-1";
}

function runonload() {
    loading_page.style.animation = "fade-out 0.4s 0.8s forwards";
    main_page.style.animation = "large_pop_up 1s 0.8s forwards cubic-bezier(0,.91,.26,1)";
    navbar.style.animation = "large_pop_down 0.5s 0.8s forwards cubic-bezier(0,.91,.26,1)";
    program_info_div.style.animation = "fade-in 1s 0s forwards";
    setTimeout(sleep1, 1200)
}


window.addEventListener("load", event =>{
    isLoaded = gallery.style.content.complete && gallery.style.content.naturalHeight !== 0;
    runonload()
});

setTimeout(still_loading, 3000)

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