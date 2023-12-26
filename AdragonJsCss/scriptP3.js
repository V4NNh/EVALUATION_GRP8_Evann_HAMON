//formulaire validation
let choix=document.getElementById("dragon-select");
let mdp=document.getElementById("password");
let form=document.getElementById("form");
let email=document.getElementById("email")
form.addEventListener('submit', (e) => {
    let passwordError = document.getElementById("mdpError");
    let drakeError = document.getElementById("drError");
    let cadError = document.getElementById("cadError");
    let passwordRegex= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    if (choix.value===""){
        drakeError.textContent = "Choisissez un dragon";
        e.preventDefault();
    }else{
        drakeError.textContent = "";
        if (passwordRegex.test(mdp.value)&&mdp.value.length>=8){
            passwordError.textContent = "";
            cadError.textContent = "Copie du CAD invalide";
            e.preventDefault();
            console.log(choix.value);
            console.log(mdp.value);
            console.log(email.value);
        }else{
            passwordError.textContent="Votre mot de passe doit contenir au moins 1 caractère spécial, une majuscule et au moins 8 caractères";
            e.preventDefault();
        }
    }
})

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