const navOpenIcon = document.querySelector(".navigation-icon")  
const navCloseIcon = document.querySelector("nav .close-icon")
const nav = document.querySelector("nav")
navOpenIcon.addEventListener("click", () => {
    openNavigation()
})
navCloseIcon.addEventListener("click", () => {
    closeNavigation()
})

function openNavigation() {
    console.log("hello  ");
    nav.style.width = "300px"
}

function closeNavigation() {
    nav.style.width = "0"
}

//by ingredient popup
const popupBtn = document.querySelectorAll(".subNav.popup > li > a")
popupBtn.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()

        const popupContent = element.nextElementSibling

        //up arrow - close, down arrow - open
        const iconDrawer = element.querySelector("img")

        if(popupContent.classList.contains("open")) {
            closePopup(popupContent, iconDrawer)
        }
        else {
            openPopup(popupContent, iconDrawer)
        }
    })
});

function openPopup(popupContent, icon) {
    popupContent.style.display = "block"
    popupContent.classList.add("open")

    icon.src = "icon/downArrow.svg"
}

function closePopup(popupContent, icon) {
    popupContent.style.display = "none"
    popupContent.classList.remove("open")

    icon.src = "icon/upArrow.svg"
}

//toggle menu tab
const savedRecipeTab = document.querySelector(".menu-tab input:first-child")
const createdRecipeTab = document.querySelector(".menu-tab input:last-child")

function toggleTab(e) {
    const savedRecipeTab = document.querySelector(".menu-tab input:first-child")
    const createdRecipeTab = document.querySelector(".menu-tab input:last-child")

    savedRecipeTab.classList.remove("selected")
    createdRecipeTab.classList.remove("selected")

    e.target.classList.add("selected")
}
