var gallery_div_f = document.getElementsByClassName('splash-background')[0]
var gallery_div_b = document.getElementsByClassName('splash-background-two')[0]

const bg_images = ['skyline.webp', 'flats.webp', 'skyline2.webp', 'maldives.webp', 'branch.webp']
var current_bg_image = 0
var alt = false



fade_transition = 2 // sec
transform_transition = 7 //sec

gallery_div_b.style.transition = `opacity ${fade_transition}s, transform ${transform_transition}s linear`
gallery_div_f.style.transition = `opacity ${fade_transition}s, transform ${transform_transition}s linear`

gallery_div_f.style.transform = 'scale(1.2) translate(50px, 0px)'
gallery_div_f.style.backgroundImage = 'url("Images/' + bg_images[0] + '")'

setInterval(() => {
    current_bg_image = (current_bg_image + 1) % bg_images.length

    if (alt == false) {
        alt = true

        gallery_div_b.style.backgroundImage = 'url("Images/' + bg_images[current_bg_image] + '")'
        gallery_div_b.style.opacity = 1
        gallery_div_b.style.transition = `opacity ${fade_transition}s, transform ${transform_transition}s linear`

        gallery_div_b.style.transform = 'scale(1.2) translate(50px, 0px)'

        gallery_div_f.style.opacity = 0

        setTimeout(() => {
            gallery_div_b.style.zIndex = 10
            gallery_div_f.style.zIndex = 1
            gallery_div_f.style.transition = 'none'
            gallery_div_f.style.transform = 'scale(1.2) translate(-50px, 0px)'
        }, fade_transition * 1000)

    } else {
        alt = false

        gallery_div_f.style.backgroundImage = 'url("Images/' + bg_images[current_bg_image] + '")'
        gallery_div_f.style.opacity = 1
        gallery_div_f.style.transition = `opacity ${fade_transition}s, transform ${transform_transition}s linear`

        gallery_div_f.style.transform = 'scale(1.2) translate(50px, 0px)'

        gallery_div_b.style.opacity = 0

        setTimeout(() => {
            gallery_div_f.style.zIndex = 10
            gallery_div_b.style.zIndex = 1
            gallery_div_b.style.transition = 'none'
            gallery_div_b.style.transform = 'scale(1.2) translate(-50px, 0px)'
        }, fade_transition * 1000)


    }
}, (transform_transition - fade_transition) * 1000)

menu_expand = document.getElementsByClassName('menu-container')[0]
menu_modal = document.getElementsByClassName('menu-modal')[0]

var menu_open = false
menu_expand.addEventListener('click', () => {
    menu_open = menu_open ? false : true
    if (menu_open == true) {
        menu_modal.style.opacity = '0'
        menu_modal.style.display = 'block'
        setTimeout(() => {
            menu_modal.style.animation = 'menu-open 1s forwards'
        }, 10)
    }
    else {
        menu_modal.style.animation = 'menu-close 1s forwards'
        setTimeout(() => {
            if (menu_open == false) {
                menu_modal.style.display = 'none'
            }
        }, 1000)
    }
})

links = document.getElementsByTagName('a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        menu_open = false
        menu_modal.style.animation = 'menu-close 1s forwards'
        setTimeout(() => {
            if (menu_open == false) {
                menu_modal.style.display = 'none'
            }
        }, 1000)
    })
}


fade_anims = [
    {
        'name': 'welcome',
        'elem': document.getElementsByClassName('text-container')[0],
        'fadein': 35,
        'fadeout': 999999,
        'animationdelay': 0,
    },
    {
        'name': 'projects',
        'elem': document.getElementsByClassName('project-div')[0],
        'fadein': 120,
        'fadeout': 999999,
        'animationdelay': 0,
    },
    {
        'name': 'projects-preview',
        'elem': document.getElementsByClassName('right-col')[0],
        'fadein': 110,
        'fadeout': 999999,
        'animationdelay': 0,
    },

]

document.addEventListener('scroll', () => { scroll_handler() })

function scroll_handler() {
    vh_p = window.innerHeight / 100

    for (let i = 0; i < fade_anims.length; i++) {
        if (scrollY / vh_p >= fade_anims[i]['fadein'] && scrollY / vh_p <= fade_anims[i]['fadeout']) {
            fade_anims[i]['elem'].style.animation = `fade-in-up 1s ${fade_anims[i]['animationdelay']}s forwards`
        } else if (scrollY / vh_p >= fade_anims[i]['fadeout']) {
            fade_anims[i]['elem'].style.animation = `fade-out-down 1s ${fade_anims[i]['animationdelay']}s forwards`
        }
    }
}

scroll_handler()

projects = [
    {
        'name': '',
        'coverimage': 'Images/gdp.webp',
        'description': 'A website that allows the user to select five countries, whose rate of growth can then be compared by calculating the correlation coefficient between their change in GDP and presenting this as a correlation matrix.<br><br>Data is fetched from an https server and correlation is calculated server-side.<br><br>Check it out <a href="https://danileliasov.com/gdp" target="_blank">here</a>.',
        'link': ''
    },
    {
        'name': '',
        'coverimage': 'Images/tictactoe.webp',
        'description': 'An online multiplayer tictactoe game.<br><br>Play <a href="https://danileliasov.com/tictactoe" target="_blank">here</a>.',
        'link': ''
    },
    {
        'name': '',
        'coverimage': 'Images/wordle.webp',
        'description': 'A python based version of wordle, played in the terminal.<br><br>Check it out <a href="https://github.com/Ma1war33/Wordle" target="_blank">here</a>.',
        'link': ''
    },
    {
        'name': '',
        'coverimage': 'Images/homepage.webp',
        'description': 'This website was coded with HTML, CSS and Javascript without the use of any frameworks.',
        'link': ''
    },
    {
        'name': '',
        'coverimage': 'Images/pi.webp',
        'description': 'A few simple Python programs to approximate PI using different infinite series. The different speeds of convergence of different series can be measured by timing the execution of the programs.',
        'link': ''
    },
    {
        'name': '',
        'coverimage': 'Images/morse.webp',
        'description': 'A simple Python program to translate text to morsecode and back. The program automatically detects the direction of translation and outputs the result.<br><br>Check it out <a href="https://github.com/Ma1war33/MorseEncoder" target="_blank">here</a>.',
        'link': ''
    }


]

project_cont = document.getElementsByClassName("project-div")[0]
columns = [document.getElementsByClassName("col-1")[0], document.getElementsByClassName("col-2")[0], document.getElementsByClassName("col-3")[0]]

for (let i = 0; i < projects.length; i++) {
    project_div = document.createElement("div")
    //project_img = document.createElement("img")
    //project_img.classList.add('project-img')
    //project_img.src = projects[i]['coverimage']

    //project_div.appendChild(project_img)
    project_div.style.backgroundImage = 'url("' + projects[i]['coverimage'] + '")'
    project_div.classList.add('project')

    console.log(((i + 1) % 3) - 1)
    columns[i % 3].appendChild(project_div)

    fade_anims.push(
        {
            'name': '',
            'elem': project_div,
            'fadein': 110,
            'fadeout': 999999,
            'animationdelay': Math.random() * 0.3,
        }
    )

    project_div.addEventListener('mouseover', () => { project_handle_mouseover(i) })
}

project_preview = document.getElementsByClassName('project-preview')[0]
project_desc = document.getElementsByClassName('project-description')[0]
function project_handle_mouseover(index) {
    project_preview.style.backgroundImage = 'url("' + projects[index]['coverimage'] + '")'
    project_desc.innerHTML = projects[index]['description']
}

// Smooth scrolling when clicking anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
