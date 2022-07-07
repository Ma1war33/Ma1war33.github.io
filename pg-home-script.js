top_btn = document.getElementById("top-button");
interval = document.getElementById("interval-sec");

interval_btn = document.getElementById("interval-button");
projects = document.getElementById("projects-sec");

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

top_btn.addEventListener('click', e => {
    if (isSafari == true) {
        seamless.scrollIntoView(interval, {behavior: 'smooth'})
        console.log("safari-anim")
    }
    else {
        interval.scrollIntoView({behavior: 'smooth'});
    }
})

interval_btn.addEventListener('click', e => {
    if (isSafari == true) {
        seamless.scrollIntoView(projects, {behavior: 'smooth'})
        console.log("safari-anim")
    }
    else {
        projects.scrollIntoView({behavior: 'smooth'});
    }
})


function on_resize() {

}

on_resize()
window.addEventListener('resize', on_resize) 
