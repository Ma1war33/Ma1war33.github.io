
loader = document.getElementsByClassName('loader')[0]
nameWrapper = document.getElementsByClassName('name-wrapper')[0]

document.onload = onload()
function onload() {
    setTimeout(() => { // decrease width after 1s
        nameWrapper.style.width = '0px'

        setTimeout(() => { // make translucent after 0.75s
            loader.style.opacity = '0'

            setTimeout(() => { // display none after 1s
                loader.style.display = 'none'
            }, 1000)

        }, 750)

    }, 500)
}

projects = [
    {
        'h1': 'GDP Growth Correlation Comparison Website',
        'p': 'A website allowing comparison of growth between countries over a period of time by calculating a correlation between their change in GDP. The data is displayed in a correlation matrix, illustrating the relationships between countries.',
        'href': 'https://danileliasov.com/gdp'
    },
    {
        'h1': 'Maze Solver',
        'p': 'A python program to solve mazes using either BFS (Breadth First Search) or DFS (Depth First Search). Mazes are inputted by holding them up to the camera, then selecting a start and end. Worked on in collaberation with <a href="https://zacnolan.com/" target="_blank">Zac Nolan.</a>',
        'href': 'https://github.com/Lem0naise/maze-solver'
    },
    {
        'h1': 'Noughts and Crosses',
        'p': 'An online multiplayer noughts and crosses / tic-tac-toe game.',
        'href': 'https://danileliasov.com/tictactoe'
    },
    {
        'h1': 'Wordle',
        'p': 'Wordle, implemented in python, played in the terminal.',
        'href': 'https://github.com/Ma1war33/Wordle'
    },
]

projectsDiv = document.getElementsByClassName('projects')[0]

for (let i = 0; i < projects.length; i++) {
    projectDiv = document.createElement('div')
    projectDiv.classList.add('project')

    projectDiv.innerHTML = `<h1>${projects[i]['h1']}</h1><p>${projects[i]['p']}</p>`
    projectDiv.onclick = () => { window.open(projects[i]['href']) }

    projectDiv.style.opacity = '0'
    projectDiv.style.animation = `pop-in 0.8s ${i * 0.2 + 1.25}s forwards`

    projectsDiv.appendChild(projectDiv)
}

function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const urlParams = new URLSearchParams(window.location.search);
const loadMobile = urlParams.get('loadmobile') || true

text = [document.getElementsByClassName('name')[0], document.getElementsByClassName('about-div')[0], document.getElementsByClassName('name')[0], document.getElementsByClassName('projects')[0]]
if (mobileCheck() == true && loadMobile == true) {
    console.log('LOADING WEBSITE FOR MOBILE')

    document.getElementsByClassName('name-wrapper')[0].style.transform = 'scale(2)'

    for (let i = 0; i < text.length; i++) {
        text[i].style.fontSize = `${window.getComputedStyle(text[i], null).getPropertyValue('font-size').slice(0, -2) * 2}px`
    }

    headers = document.getElementsByTagName('h1')
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.fontSize = '60px'
    }

    p = document.getElementsByTagName('p')
    for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = '40px'
    }

    a = document.getElementsByTagName('a')
    for (let i = 0; i < a.length; i++) {
        a[i].style.fontSize = '40px'
    }

    document.getElementsByClassName('navbar')[0].style.height = '200px'
    document.getElementsByClassName('seperator-title')[0].style.display = 'none'

    pop_up = document.createElement('div')
    pop_up.classList.add('mobile-load-pop-up')

    pop_up_inner = document.createElement('div')
    pop_up_inner.innerHTML = '<h2>Website was loaded<br>for mobile.</h2><button class="reload" onclick=handleReloadButton()>Reload</button><button class="ok" onclick=handleOkButton()>Ok</button>'
    pop_up.appendChild(pop_up_inner)

    document.body.appendChild(pop_up)
}

function handleOkButton() {
    document.getElementsByClassName('mobile-load-pop-up')[0].style.animation = 'notif-pop-down 0.25s 0s forwards'
}

function handleReloadButton() {
    window.location.replace('https://danileliasov.com?loadmobile=false')
}
