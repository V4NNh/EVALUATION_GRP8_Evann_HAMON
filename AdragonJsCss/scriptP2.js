var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });



//dark mode
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


//burger

const hamButton = document.querySelector(".navToggler");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", toggleNav);

function toggleNav(){
    hamButton.classList.toggle("active");
    nav.classList.toggle("active");
}