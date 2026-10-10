console.log("style.js loaded");
//function to randomly determin theme either from a random stylesheet or
function changeTheme() {
    let link = document.getElementById("theme-sheet");
    let sheet;
    if (Math.random() < 0.1) {
        resetTheme();
        link.href = "styles/nostyles.css";
        console.log("no theme used");
        return;
    }
    if (Math.random() < 0.6) {
        //remove the changes done by randomiseTheme so it does not interfere with the stylesheet
        resetTheme();

        switch (Math.floor(Math.random() * 5)) {
            case 0:
                sheet = "styles/nostyles.css";
                break;
            case 1:
                sheet = "styles/styles1.css";
                break;
            case 2:
                sheet = "styles/styles2.css";
                break;
            case 3:
                sheet = "styles/styles3.css";
                break;
            case 4:
                sheet = "styles/styles4.css";
                break;
        }
        link.href = sheet;
        console.log("randomly chosen pre-written theme: " + sheet);
    } else {
        link.href = "styles/nostyles.css";
        randomiseTheme();
        console.log("theme generated, cohesion:", cohesion);
    }
}

function resetTheme() {
            const control = document.getElementById("controls");
            control.style = "border: 1px solid black; padding: 10px; width: fit-content;";
            //create list of elements to reset
            const elementsToReset = document.querySelectorAll("#controls button, #controls input[type='text'], #controls input[type='number'], #controls select");
            elementsToReset.forEach(element => {
                element.style = "";
            });
}

//set the style of all components of the controls
let cohesion = Math.random() > 0.5 ? "none" : "unicolour";
let globalTheme = {
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256)
}

function colour(primaryColour, operation, operator) {
    let colour;
    if (cohesion === "unicolour" && primaryColour in globalTheme) {
        if (operation != undefined && operator != undefined) {
            if (operation === "dark") {
                colour = Math.floor(globalTheme[primaryColour] * operator);
            }
        } else {
            colour = globalTheme[primaryColour];
        }
    } else {
        colour = Math.floor(Math.random() * 256);
    }
    return colour;
}

function borderRadius() {
    let radius = Math.random() > 0.5 ? 0 : Math.floor(Math.random()*15)+1;
    return radius;
}

function randomiseTheme () {
    //cohesion
    cohesion = Math.random() > 0.5 ? "none" : "unicolour";

    //randomise elements
    const control = document.getElementById("controls");
    control.style.backgroundColor = `rgb(${colour("red", "dark", 0.8)},${colour("green", "dark", 0.8)}, ${colour("blue", "dark", 0.8)})`;
    control.style.border = `${Math.floor(Math.random() * 5) + 1}px solid ${colour("null")}`;

    const controlButtons = document.querySelectorAll("#controls button");
    controlButtons.forEach(button => {
        button.style.backgroundColor = `rgb(${colour("red")},${colour("green")}, ${colour("blue")})`;
        button.style.border = `1px solid ${colour("null")}`;
        button.style.borderRadius = `${borderRadius()}px`;
        button.style.padding = `${Math.floor(Math.random() * 5) + 1}px ${Math.floor(Math.random() * 10) + 1}px`;;
    });

    const controlTextInputs = document.querySelectorAll("#controls input[type='text'], #controls input[type='number']");
    controlTextInputs.forEach(input => {
        input.style.backgroundColor = `rgb(${colour("red")},${colour("green")}, ${colour("blue")})`;
        //get luminance of the background color to determine text color
        input.style.border = `1px solid ${colour("null")}`;
        input.style.borderRadius = `${borderRadius()}px`;
        //console.log("test: "+input.style.borderRadius);
        input.style.padding = `${Math.floor(Math.random() * 5) + 1}px ${Math.floor(Math.random() * 10) + 1}px`;
    });

    const controlSelects = document.querySelectorAll("#controls select");
    controlSelects.forEach(select => {
        select.style.backgroundColor = `rgb(${colour("red")},${colour("green")}, ${colour("blue")})`;
        //get luminance of the background color to determine text color
        select.style.border = `$1px solid ${colour("null")}`;  
        select.style.borderRadius = `${borderRadius()}px`;
        select.style.padding = `${Math.floor(Math.random() * 5) + 1}px ${Math.floor(Math.random() * 10) + 1}px`;
    });
}

