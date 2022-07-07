top_btn = document.getElementById("top-button");
interval = document.getElementById("interval-sec");

interval_btn = document.getElementById("interval-button");
projects = document.getElementById("projects-sec");

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (isSafari == true) {
    alert("Features on this website may not work as intended on this browser, we recommend using one such as chrome.")
} 

top_btn.addEventListener('click', e => {
    if (isSafari == true) {
        seamless.scrollIntoView(interval, {behavior: 'smooth'})
    }
    else {
        interval.scrollIntoView({behavior: 'smooth'});
    }
})

interval_btn.addEventListener('click', e => {
    if (isSafari == true) {
        seamless.scrollIntoView(projects, {behavior: 'smooth'})
    }
    else {
        projects.scrollIntoView({behavior: 'smooth'});
    }
})


function on_resize() {

}

on_resize()
window.addEventListener('resize', on_resize) 
