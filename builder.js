projects = [
    {
        title:"Website",
        item_image:"Images/projects/thispage_item.webp",
        image:"Images/projects/thispage.webp"
    },
    {
        title:"Wordle",
        item_image:"Images/projects/wordle_item.webp",
        image:"Images/projects/wordle.webp"
    },
    {
        title:"Social Links",
        item_image:"Images/projects/socials_item.webp",
        image:"Images/projects/socials.webp"
    },
    {
        title:"Pi Calculator",
        item_image:"Images/projects/pi_item.webp",
        image:"Images/projects/pi.webp"
    },
    {
        title:"Morse Coder",
        item_image:"Images/projects/morse_item.webp",
        image:""
    },
    {
        title:"Coming Soon",
        item_image:"Images/projects/comingsoon_item.webp",
        image:""
    },
]


pm = document.getElementById('projects-modal');
pm_fadetime = 0.25 // seconds


for (let i = 0; i < projects.length; i++) {
    var div = document.createElement("div");
    div.classList.add("projects-item");
    div.setAttribute('modalimage', `${projects[i].image}`);
    //div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    x = Math.floor(Math.random() * 255)
    div.style.backgroundColor = `rgb(${x},${x},${x})`
    div.style.backgroundImage = `url(${projects[i].item_image})`
    
    
    if (i % 3 == 0) {
        div.style.marginLeft = '8.75vw';
    }

    if (projects[i].image != '') {
        div.onclick = function(x) {
            console.log('OPENING')
            image = x.toElement.getAttribute('modalimage')
            pm.style.backgroundImage = `url(${image})`
    
            pm.style.display = 'block'
            pm.style.animation = `fade-in ${pm_fadetime}s forwards`
        };    
    }
    
    document.getElementById("projects-div").appendChild(div);
}

document.getElementById('projects-modal-close').onclick = function(x) {
    pm.style.animation = `fade-out ${pm_fadetime}s forwards`
    function removemodal() {
        pm.style.display = 'none'
        pm.style.backgroundImage = ''
    }
    setTimeout(removemodal, pm_fadetime*1000)
}

