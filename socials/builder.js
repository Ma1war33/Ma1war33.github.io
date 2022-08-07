data = [
    {
        "image":"socials/instagram.png",
        "title":"@danil.eliasov"
    },
    {
        "image":"socials/snapchat.png",
        "title":"@ma1war33"
    },
    {
        "image":"socials/tiktok.png",
        "title":"@ma1war3__"
    },
    {
        "image":"socials/discord.png",
        "title":"ma1war3#9999"
    },
    {
        "image":"socials/gmail.png",
        "title":"danil.r.eliasov"
    },
    {
        "image":"socials/messages.png",
        "title":"+44 7543184257"
    }
]



for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.classList.add("social-item");

    var div_text = document.createElement("p");
    div_text.innerHTML = data[i].title;
    div_text.classList.add("social-item-text");

    var div_image = document.createElement("img");
    div_image.src = data[i].image;
    div_image.classList.add("social-item-image");
    
    

    var div_text_div = document.createElement("div");
    div_text_div.classList.add("socials-text-div");

    document.getElementById("socials-div").appendChild(div).appendChild(div_image)
    div.appendChild(div_text_div).appendChild(div_text);
}

