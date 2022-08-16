navbar = document.getElementById("navbar");
wordle_img = document.getElementById("wordle-img");
const divs = document.getElementsByClassName("fade");
console.log(divs)
const intersectLines_orig = [[-999, -999, 10, 30], [50, 70, 200, 250], [90, 100, 200, 250], [-999, -999, 30, 50], [60, 90, 220, 250], [230, 280, 500, 550]]
const movementLines_orig = [[100, 250, -10], [100, 180]]

ItemList = divs
ItemList2 = [ItemList[4], ItemList[4]]


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

        if (window.innerWidth >= 900) {
            if (movementLines[i].length == 3) {

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

        
        if (movementLines[i].length == 2) {

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
                        console.log(`Images/wordle/${x}.webp`)
    

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