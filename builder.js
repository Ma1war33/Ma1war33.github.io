projects = [
    {
        title:"This Website!",
        description:"I created danileliasov.com (the website you are currently on) with HTML, CSS and JS, without the use of any website builders or Javascript libraries.",
        item_image:"Images/projects/thispage_item.webp",
        image:"Images/projects/thispage.webp",
        color:"white"

    },
    {
        title:"Wordle",
        description:"This is a Python-based version of the game 'Wordle', played in the terminal.",
        item_image:"Images/projects/wordle_item.webp",
        image:"Images/projects/wordle.webp",
        color:"white"
    },
    {
        title:"Social Links",
        description:"A website displaying various links for easy access, made with HTML, CSS and JS. The website can only be accessed with a unique key, passed in the url, which allows data to be retrieved from a custom http server. An incorrect key or lack thereof will redirect the user to an error page.",
        item_image:"Images/projects/socials_item.webp",
        image:"Images/projects/socials.webp",
        color:"#1E1E1E"
    },
    {
        title:"Pi Calculator",
        description:"A simple Python program, that utilises the Gregory-Leibniz infinite series to approximate Pi.",
        item_image:"Images/projects/pi_item.webp",
        image:"Images/projects/pi.webp",
        color:"#1E1E1E"
    },
    {
        title:"Morse Coder",
        description:"A simple Python application (Interface using PyQt) that translates any string to Morse Code and vice versa from a single input.",
        item_image:"Images/projects/morse_item.webp",
        image:"Images/projects/morse.webp",
        color:""
    },
    {
        title:"Coming Soon",
        description:"",
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
    div.setAttribute('id', `${i}`);
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

            var desc = projects[parseInt(x.target.getAttribute('id'))].description;
            var title = projects[parseInt(x.target.getAttribute('id'))].title;
            pm_info_text.innerHTML = `${desc}`
            pm_info_title.innerHTML = `${title}`

            if (color == '#1E1E1E') {
                pm_info_div.style.filter = 'invert(1)'
            } else {
                pm_info_div.style.filter = 'invert(0)'
            }

            pm_info.style.backgroundColor = `${color}`
            pm_info.style.display = 'block';
            pm_info.style.animation = `fade-in-slide 0.5s forwards cubic-bezier(.07,.44,.36,.97)`;
            pm_info.style.animationDelay = `${pm_fadetime-0.1}s`;
            
        };    
    }
    
    document.getElementById("projects-div").appendChild(container).appendChild(div);
}

var pm_info_div = document.createElement("div");
pm_info_div.classList.add('projects-info-modal-div')

var pm_info_title = document.createElement("p");
pm_info_title.classList.add('projects-info-modal-title', 'splash')
pm_info_div.appendChild(pm_info_title)

var pm_info_text = document.createElement("p");
pm_info_text.classList.add('projects-info-modal-text', 'text')
pm_info_div.appendChild(pm_info_text)

pm_info.appendChild(pm_info_div)
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

