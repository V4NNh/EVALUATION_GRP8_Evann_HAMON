//dark mode
/*var dm=document.getElementById("darkmode");

dm.onclick = function(){
    document.body.classList.toggle("darkMode");
}*/

let darkMode=localStorage.getItem("darkmode");
const darkModeToggle = document.querySelector("#darkmode");

const darkmodeOn = () => {
    document.body.classList.add("darkMode")
    localStorage.setItem("darkmode", "on")
};

const darkmodeOff = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkmode", null)
};

if (darkMode==="on"){
    darkmodeOn();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "on"){
        darkmodeOn();
        console.log(darkMode);
    }else{
        darkmodeOff();
        console.log(darkMode);
    }
})


/*Menu burger*/

const hamButton = document.querySelector(".navToggler");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", toggleNav);

function toggleNav(){
    hamButton.classList.toggle("active");
    nav.classList.toggle("active");
}