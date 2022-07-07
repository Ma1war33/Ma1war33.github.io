top_btn = document.getElementById("top-button");
interval = document.getElementById("interval-sec");

interval_btn = document.getElementById("interval-button");
projects = document.getElementById("projects-sec");

top_btn.addEventListener('click', e => {
    interval.scrollIntoView({behavior: 'smooth'});
})

interval_btn.addEventListener('click', e => {
    projects.scrollIntoView({behavior: 'smooth'});
})

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (isSafari == true) {
    alert("Features on this website may not work as intended on this browser, we recommend using one such as chrome.")
} 


function on_resize() {

}

on_resize()
window.addEventListener('resize', on_resize) 
