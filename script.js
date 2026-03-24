console.log("Script started");

function chnageStyles() {
    console.log("click");

    let p = document.getElementById("text");
    p.innerText = "The text has been changed";

    p.style.color = "lightgreen";
    p.style.fontSize = "40px";
    p.style.border = "40px solid lightgreen";
    p.style.backgroundColor = "white";    
}