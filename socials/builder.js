var startTime, endTime
startTime = new Date();

var queryString = window.location.search;
queryString = queryString.replace("?", "")

var queryStringHash = sha256(queryString.concat("HTXkROWmel"))

if (queryStringHash == "124b507af6dcce7e207793ae021068c20958fcfddea9e570eb22081bceff74e3") {

    fetch(`https://danileliasov-https.herokuapp.com/key=${queryStringHash}`)
        .then((response) => response.json())
        .then((data) => {

            windowloaded = false
            window.onload = function() {
                windowloaded = true
            }

            function waitForElement(){
                endTime = new Date();
                var timeDiff = endTime - startTime; //in ms
                timeDiff /= 1000;

                Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                
                    if(timeDiff >= 0.8){
                        document.body.removeChild(document.getElementById("auth-div"));
                        document.getElementById("title-div").style.opacity = "1";

                        for (let i = 0; i < data.length; i++) {

                            var link = document.createElement("a");
                            link.href = data[i].link;
                            link.classList.add("link");
                            if (data[i].link != "") {
                                link.target = "_blank"
                            }

                            var div = document.createElement("div");
                            div.classList.add("social-item");
                            div.style.animation = `0.5s ${(0.1* i) + 0.2}s 1 pop-in forwards ease-out`

                            var div_text = document.createElement("p");
                            div_text.innerHTML = data[i].title;
                            div_text.classList.add("social-item-text");

                            var div_image = document.createElement("img");
                            div_image.src = data[i].image;
                            div_image.classList.add("social-item-image");

                            var div_text_div = document.createElement("div");
                            div_text_div.classList.add("socials-text-div");

                            document.getElementById("socials-div").appendChild(link).appendChild(div).appendChild(div_image)
                            div.appendChild(div_text_div).appendChild(div_text);

                        }
                    }
                    else{
                        setTimeout(waitForElement, 100);
                    }
                });
                
            }

            waitForElement()

        });
} else {
    window.location.replace("https://danileliasov.com/access-denied");
}
