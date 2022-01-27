x = document.getElementById("minitext");
y = document.getElementById("subminitext");

function textpos() {
    if (window.innerWidth < 592) {
        x.style.top = "calc(10vh + 445px";
        y.style.top = "calc(10vh + 530px";
    }
    else if (window.innerWidth < 683) {
        x.style.top = "calc(10vh + 410px";
        y.style.top = "calc(10vh + 500px";
    }
    else if (window.innerWidth < 776) {
        x.style.top = "calc(10vh + 370px";
        y.style.top = "calc(10vh + 460px";
    }
    else if (window.innerWidth < 907) {
        x.style.top = "calc(10vh + 330px";
        y.style.top = "calc(10vh + 380px";
    }
    else if (window.innerWidth < 1151) {
        x.style.top = "calc(10vh + 298px";
        y.style.top = "calc(10vh + 350px";
    }
    else if (window.innerWidth < 1519) {
        x.style.top = "calc(10vh + 250px";
        y.style.top = "calc(10vh + 300px";
    }
    else if (window.innerWidth < 2000) {
        x.style.top = "calc(10vh + 220px";
        y.style.top = "calc(10vh + 270px";
    }
    else {
        x.style.top = "calc(10vh + 210px";
        y.style.top = "calc(10vh + 260px";
    }
}

textpos()
window.addEventListener('resize', textpos)
