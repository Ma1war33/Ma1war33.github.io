projects = [
    {
        title:"Website",
        item_image:"Images/projects/thispage_item.webp",
        image:"Images/projects/thispage.webp",
        color:"red"
    },
    {
        title:"Wordle",
        item_image:"Images/projects/wordle_item.webp",
        image:"Images/projects/wordle.webp",
        color:"green"
    },
    {
        title:"Social Links",
        item_image:"Images/projects/socials_item.webp",
        image:"Images/projects/socials.webp",
        color:"blue"
    },
    {
        title:"Pi Calculator",
        item_image:"Images/projects/pi_item.webp",
        image:"Images/projects/pi.webp",
        color:"yellow"
    },
    {
        title:"Morse Coder",
        item_image:"Images/projects/morse_item.webp",
        image:"",
        color:""
    },
    {
        title:"Coming Soon",
        item_image:"Images/projects/comingsoon_item.webp",
        image:"",
        color:""
    },
]

var pm_info = document.createElement("div");
pm_info.classList.add("projects-info-modal");
pm_info.setAttribute('id', 'projects-info-modal')
pm = document.getElementById('projects-modal');
pm_fadetime = 0.25 // seconds


var container = document.createElement("div");
container.setAttribute('id', 'container')
for (let i = 0; i < projects.length; i++) {
    var div = document.createElement("div");
    div.classList.add("projects-item");
    div.setAttribute('modalimage', `${projects[i].image}`);
    div.setAttribute('icolor', `${projects[i].color}`);
    //div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    x = Math.floor(Math.random() * 255)
    div.style.backgroundColor = `rgb(${x},${x},${x})`
    div.style.backgroundImage = `url(${projects[i].item_image})`
    
    
    if (i % 3 == 0) {
        div.style.marginLeft = '11.5vw';
    }

    if (projects[i].image != '') {
        div.onclick = function(x) {
            image = x.target.getAttribute('modalimage')
            color = x.target.getAttribute('icolor') || 'white';


            pm.style.backgroundImage = `url(${image})`
            pm.style.display = 'block'
            pm.style.animation = `fade-in ${pm_fadetime}s forwards`

            container.style.animation = `fade-out 0s forwards`
            container.style.animationDelay = `${pm_fadetime}s`;

            pm_info.style.backgroundColor = `${color}`
            pm_info.style.display = 'block';
            pm_info.style.animation = `fade-in-slide 0.3s forwards`;
            pm_info.style.animationDelay = `${pm_fadetime-0.1}s`;
            
        };    
    }
    
    document.getElementById("projects-div").appendChild(container).appendChild(div);
}

document.getElementById("projects-div").appendChild(pm_info);

document.getElementById('projects-modal-close').onclick = function(x) {
    container.style.animation = `fade-in 0s forwards`
    pm.style.animation = `fade-out ${pm_fadetime}s forwards`
    pm_info.style.animation = `fade-out ${pm_fadetime}s forwards`
    function removemodal() {
        pm.style.display = 'none'
        pm.style.backgroundImage = ''

        pm_info.style.display = 'none'
    }
    setTimeout(removemodal, pm_fadetime*1000)
}

