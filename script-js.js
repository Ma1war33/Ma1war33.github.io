navbar = document.getElementById("navbar");
wordle_img = document.getElementById("wordle-img");
pmodal = document.getElementById('projects-modal');
projects_p3 = document.getElementById('projects_p3');
const divs = document.getElementsByClassName("fade");

console.log(divs)
const intersectLines_orig = [[-999, -999, 10, 30], [50, 70, 200, 250], [90, 100, 200, 250], [-999, -999, 30, 50], [60, 90, 220, 250], [260, 290, 500, 550]]
const movementLines_orig = [[100, 250, -10], [100, 180], [230, 280], [255, 400]]

ItemList = divs
ItemList2 = [ItemList[4], ItemList[4], document.body, pmodal]


intersectLines = intersectLines_orig
movementLines = movementLines_orig

function refreshIntersectLines() {
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth


    for (let i = 0; i < intersectLines_orig.length; i++) {
        for (let j = 0; j < intersectLines_orig[i].length; j++) {
            intersectLines[i][j] = ((intersectLines_orig[i][j])*(windowHeight/100))
        }
    }

    for (let i = 0; i < movementLines_orig.length; i++) {
        for (let j = 0; j < movementLines_orig[i].length; j++) {
            if (j == 2){
                movementLines[i][j] = ((movementLines_orig[i][j])*(windowWidth/100))
            }
            else {
                movementLines[i][j] = ((movementLines_orig[i][j])*(windowHeight/100))
            }
        }
    }

}


//window.addEventListener("resize", refreshIntersectLines)
refreshIntersectLines()

window.addEventListener("scroll", e => {
    
    for (let i = 0; i < ItemList2.length; i++) {

        if (window.innerWidth >= 1000) {
            if (i == 0) {

                if (scrollY < movementLines[i][0] || scrollY > movementLines[i][1]) {
                    ItemList2[i].style.transform = "translateX(0);"
                    
                } else {
                    
                    if (scrollY >= movementLines[i][0]) {
                        
                        AreaScrolled = (scrollY - movementLines[i][0])/(movementLines[i][1] - movementLines[i][0])
                        ItemList2[i].style.transform = `translateX(${movementLines[i][2]*AreaScrolled}px)`;

                    }
                    
                } 

            }
        } else {
            ItemList2[i].style.transform = "translateX(0);"
        }

        
        if (i == 1) {

            if (scrollY < movementLines[i][0]) {
                wordle_img.src="Images/wordle/1.webp"
                
            } else {
                
                if (scrollY > movementLines[i][1]) {
                    wordle_img.src="Images/wordle/7.webp"
                } else if (scrollY >= movementLines[i][0]) {
                        AreaScrolled = (scrollY - movementLines[i][0])/(movementLines[i][1] - movementLines[i][0])
                        AreaLength = movementLines[i][1] - movementLines[i][0]
    
                        x = Math.floor((scrollY - movementLines[i][0]) / (AreaLength / 7) + 1)
                        wordle_img.src=`Images/wordle/${x}.webp`
    

                    } 
            } 

        }

        if (i == 2) {
            if (scrollY < movementLines[i][0]) {
                document.body.style.backgroundColor = 'rgb(255, 255, 255)';
            } else {
                if (scrollY > movementLines[i][1]) {
                    document.body.style.backgroundColor = 'rgb(20, 20, 20)';
                } else if (scrollY >= movementLines[i][0]) {
                    AreaScrolled = (scrollY - movementLines[i][0])/(movementLines[i][1] - movementLines[i][0])
                    x = 255 - (235 * AreaScrolled)
                    document.body.style.backgroundColor =`rgb(${x}, ${x}, ${x})`


                } 
            }
        }

        if (window.getComputedStyle(pmodal).display == 'block') {
            if (i == 3) {
                if (scrollY < movementLines[i][0] || scrollY > movementLines[i][1]) {
                    pmodal.style.animation = `fade-out 0.25s forwards`
                    projects_p3.style.filter = 'blur(0px)'
                    function removemodal() {
                        pm.style.display = 'none'
                        pm.style.backgroundImage = ''
                    }
                    setTimeout(removemodal, 250)
                } 
            }
        }
    }


    for (let i = 0; i < ItemList.length; i++) {
        try{
            if (scrollY < intersectLines[i][0] || scrollY > intersectLines[i][3]) {
                ItemList[i].style.opacity = 0
            } else {

                if (scrollY > intersectLines[i][1] && scrollY < intersectLines[i][2]) {
                    ItemList[i].style.opacity = 1
                } else {
                    if (scrollY >= intersectLines[i][0]) {
                        AreaScrolled = (scrollY - intersectLines[i][0])/(intersectLines[i][1] - intersectLines[i][0])
                        ItemList[i].style.opacity = AreaScrolled.toString()

                    }
                    if (scrollY >= intersectLines[i][2]) {
                        AreaScrolled = 1-((scrollY - intersectLines[i][2])/(intersectLines[i][3]- intersectLines[i][2]))
                        ItemList[i].style.opacity = AreaScrolled.toString()
                    }
                }
            }
        }
        catch(e) {

        }
    }

    
    
})


