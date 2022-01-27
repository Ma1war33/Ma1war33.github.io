var helloshown = false;
var projectsfirstload = true;
var projectsshown = false;

var undertext2 = document.getElementById("undertext2");

//hides 'scroll for more' text when scrolled
function scrolltext(e){
    var scroll = true;
    var scrollmsgopacity = window.getComputedStyle(undertext2).getPropertyValue("opacity");
    
    if (scrollmsgopacity=="1") {
        if (scroll=true) {
            undertext2.style.animation = "0.3s 1 fadeout forwards";
            scroll = false;
        }
    }

}

window.addEventListener('scroll', scrolltext);



function fadetextfunc() {
    //changes opacity of text depending on y position (scrollY)
    var hello = document.getElementById("hello");
    var undertext = document.getElementById("undertext");
    var minitext = document.getElementById("minitext");
    var subminitext = document.getElementById("subminitext");

    var projects = document.getElementById("projects");
    var projectlinks = document.getElementById("projectlinks");
    var morseundertext = document.getElementById("morseundertext");

    console.log(scrollY)

     if (scrollY<=150) {
        if (helloshown==true) {
            hello.style.animation = "0.7s 1 moreopacity forwards";
            undertext.style.animation = "0.7s 1 moreopacity forwards";
            minitext.style.animation = "0.7s 1 moreopacity forwards";
            subminitext.style.animation = "0.7s 1 moreopacity forwards";

            helloshown = false;

            //sets "My Projects." to hide if it is shown and in sec 1
            if (projectsshown==true){
                projects.style.animation = "0.7s 1 lessopacity forwards";
                projectlinks.style.animation = "0.7s 1 lessopacity forwards";
                morseundertext.style.animation = "0.7s 1 lessopacity forwards";
                projectsshown = false;
            }
        }
    }

    else if (scrollY>150 && scrollY<=715) {
        if (helloshown==false) {

            hello.style.animation = "0.7s 1 lessopacity forwards";
            undertext.style.animation = "0.7s 1 lessopacity forwards";
            minitext.style.animation = "0.7s 1 lessopacity forwards";
            subminitext.style.animation = "0.7s 1 lessopacity forwards";

            helloshown = true;

        }

        //sets "My Projects" to show with differnt animation depending on whether the website is being loaded for the first time
        //only runs if its hidden

        if (projectsshown==false){
            if (projectsfirstload==true){
                console.log("hahaha")
                projects.style.animation = "0.7s 1 slideInFromBottomPixels forwards cubic-bezier(0.4, 0.5, 0.5, 1)";
                projectlinks.style.animation = "0.7s 1 slideInFromBottomPixels forwards cubic-bezier(0.4, 0.5, 0.5, 1)";
                morseundertext.style.animation = "0.7s 1 slideInFromBottomPixels forwards cubic-bezier(0.4, 0.5, 0.5, 1)";
                projectsfirstload = false;

            }
            else if (projectsfirstload==false) {
                projects.style.animation = "0.7s 1 moreopacity forwards";
                projectlinks.style.animation = "0.7s 1 moreopacity forwards";
                morseundertext.style.animation = "0.7s 1 moreopacity forwards";
                projectsfirstload = false;

            }

            projectsshown = true;
        }


    }

    else if (scrollY>715) {

        if (projectsshown==true){
            projects.style.animation = "0.7s 1 lessopacity forwards"
            projectsshown = false;

            projectlinks.style.animation = "0.7s 1 lessopacity forwards";
            morseundertext.style.animation = "0.7s 1 lessopacity forwards";
        }
    }
    
}

function scrollformore(){
    if (scrollY==0) {
        undertext2.style.animation = "1s 1 slideInFromBottom forwards cubic-bezier(0.4, 0.5, 0.5, 1), 1s 11s cubic-bezier(0.4, 0.5, 0.5, 1) infinite Bounce";
        
    }
}

function scrollpos(e){
    //runs when user scrolls

    
    fadetextfunc();
    
    


}


function scrolleventistenerdelay() {

    setTimeout(scrollformore, 8200);

    window.addEventListener('wheel', scrollpos);
    window.addEventListener('wheel', scrolltext);
}

fadetextfunc();
setTimeout(scrolleventistenerdelay, 1800);
