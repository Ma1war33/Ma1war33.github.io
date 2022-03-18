left_arrow = document.getElementById("left-arrow");
right_arrow = document.getElementById("right-arrow");
gallery = document.getElementById("gallery");
gallery_background = document.getElementById("gallery-background");

number_of_images = 2
image_width = gallery.clientWidth;
image_height = gallery.clientHeight;
images = ['url("img/gallery/wordle.png")', 'url("img/gallery/morsecoder.png")']

gallery_background.style.height = image_height*10.45;

dots = [];
for (let i = 0; i < number_of_images; i++) {
    dots.push(document.getElementById("dot" + (i + 1)));
    dots[i].style.left = (0.5 * image_width) - ((number_of_images * 0.5) * 7) + (10 * i)
}

function arrowpos() {
    image_width = gallery.clientWidth;

    right_arrow.style.left = (image_width - 60) - (0.009 * window.innerWidth);

    for (let i = 0; i < number_of_images; i++) {
        dots[i].style.left = (0.5 * image_width) - ((number_of_images * 0.5) * 7) + (10 * i)
    }

}
function sleep() {
    return true
}

arrowpos()
window.addEventListener("resize", arrowpos);

current_gallery_image = 1

function update_dots(x) {
    for (let i=0; i < number_of_images; i++) {
        if (i==(x-1)) {
            dots[x-1].classList.add("dots-active");
            dots[x-1].classList.remove("dots");
        }
        else {
            try {
                dots[i].classList.remove("dots-active");
                dots[i].classList.add("dots");
            }
            catch {}
        }
    }
}

function image_set(x) {
    current_gallery_image = x
    gallery.style.content = images[current_gallery_image - 1]

    update_dots(current_gallery_image)
}

function image_change() {
    if (gallery_change==1 && current_gallery_image!=number_of_images) {

        current_gallery_image = current_gallery_image + 1
        gallery.style.content = images[current_gallery_image - 1]
    }
    if (gallery_change==-1 && current_gallery_image!=1) {

        current_gallery_image = current_gallery_image - 1
        gallery.style.content = images[current_gallery_image - 1]
    }

    update_dots(current_gallery_image)
}

function right_button_press() {
    gallery_change = 1
    image_change()
} 

function left_button_press() {
    gallery_change = -1
    image_change()
} 

left_arrow.addEventListener("click", left_button_press)
right_arrow.addEventListener("click", right_button_press)

