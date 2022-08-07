data = [
    {
        "image":"Images/instagram.png",
        "title":"@danil.eliasov"
    },
    {
        "image":"Images/snapchat.png",
        "title":"@ma1war33"
    },
    {
        "image":"Images/tiktok.png",
        "title":"@ma1war3__"
    },
    {
        "image":"Images/discord.png",
        "title":"ma1war3#9999"
    },
    {
        "image":"Images/gmail.png",
        "title":"danil.r.eliasov"
    },
    {
        "image":"Images/messages.png",
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

