let tools = document.getElementsByClassName("gomb");
let selected = "";
let botSelected = "";
let score = 0;
let scoreText = document.getElementById("scoreID");

let toolPicker = document.getElementById("tool-picker")

let endrock = document.getElementById("endRock")
let endpaper = document.getElementById("endPaper")
let endscissors = document.getElementById("endScissors")

let endrockBOT = document.getElementById("endRockBot")
let endpaperBOT = document.getElementById("endPaperBot")
let endscissorsBOT = document.getElementById("endScissorsBot")

let eredmeny = document.getElementById("eredmeny")
let nextButton = document.getElementById("next")

nextButton.addEventListener("click", () => {
    toolPicker.style.display = "block";
    endrock.style.display = "none";
    endpaper.style.display = "none";
    endscissors.style.display = "none";
    endrockBOT.style.display = "none";
    endpaperBOT.style.display = "none";
    endscissorsBOT.style.display = "none";
    eredmeny.style.display = "none";
    nextButton.style.display = "none";
})

const toolsArray = ["rock","paper","scissors"];
let random = Math.floor(Math.random() * toolsArray.length);
botSelected = toolsArray[random];
console.log(botSelected);

for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", () => {
        if (tools[i].id == "rock") {
            selected = "rock";
            endrock.style.display = "block";
            if (botSelected == "rock") {
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endrockBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "gray";
                eredmeny.innerHTML = "DRAW";
                nextButton.style.display = "block";
                
            }
            else if(botSelected == "paper"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endpaperBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "red";
                eredmeny.innerHTML = "LOSE";
                nextButton.style.display = "block";

            }
            else if(botSelected == "scissors"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                score++;
                scoreText.innerHTML = score;
                toolPicker.style.display = "none";
                endscissorsBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "lightgreen";
                eredmeny.innerHTML = "WIN";
                nextButton.style.display = "block";

            }
        }
        else if (tools[i].id == "paper") {
            selected = "paper";
            endpaper.style.display = "block";
            if (botSelected == "rock") {
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                score++;
                scoreText.innerHTML = score;
                toolPicker.style.display = "none";
                endrockBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "lightgreen";
                eredmeny.innerHTML = "WIN";
                nextButton.style.display = "block";
            }
            else if(botSelected == "paper"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endpaperBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "gray";
                eredmeny.innerHTML = "DRAW";
                nextButton.style.display = "block";
            }
            else if(botSelected == "scissors"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endscissorsBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "red";
                eredmeny.innerHTML = "LOSE";
                nextButton.style.display = "block";
            }

        }
        else if (tools[i].id == "scissors") {
            selected = "scissors";
            endscissors.style.display = "block";
            if (botSelected == "rock") {
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endrockBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "red";
                eredmeny.innerHTML = "LOSE";
                nextButton.style.display = "block";
            }
            else if(botSelected == "paper"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                score++;
                scoreText.innerHTML = score;
                toolPicker.style.display = "none";
                endpaperBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "lightgreen";
                eredmeny.innerHTML = "WIN";
                nextButton.style.display = "block";
            }
            else if(botSelected == "scissors"){
                random = Math.floor(Math.random() * toolsArray.length);
                botSelected = toolsArray[random];
                toolPicker.style.display = "none";
                endscissorsBOT.style.display = "block";
                eredmeny.style.display = "block";
                eredmeny.style.backgroundColor = "gray";
                eredmeny.innerHTML = "DRAW";
                nextButton.style.display = "block";
            }

        }
    })
}
