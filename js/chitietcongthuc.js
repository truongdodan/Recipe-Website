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

//add comment popup
const textArea = document.querySelector(".comment-form textarea")
const commentImage = document.querySelector(".added-comment-image > input")
const errorMsg = document.querySelector(".input-error")
const turnofForm = document.querySelector('.added-comment-btn button[type="reset"]')
const commentForm = document.querySelector(".comment-form form")
const wholeForm = document.querySelector(".comment-form")
const addCommentBtn = document.querySelector(".add-comment")
const addedCommentImage = document.querySelector(".added-comment-image")
const addFile = document.querySelector("#addedCommentImage")
const imageContainer = document.querySelector(".custom-file-upload")
const cameraIcon = document.querySelector(".added-comment-image > label img")
const formResetBtn = commentForm.querySelector('button[type="reset"]')

//if textarea or comment image is null, error message popup
commentForm.addEventListener("submit", (e) => {
    if((textArea.value == "" || textArea.value == null) || commentImage.files.length == 0) {
        e.preventDefault()
        errorMsg.style.display = "block"
        return
    }
    errorMsg.style.display = "none"
})
//turn off form 
commentForm.addEventListener("reset", (e) => {
    wholeForm.style.display = "none"
    errorMsg.style.display = "none"
    imageContainer.style.backgroundImage = "none"
    cameraIcon.style.display = "block"
})
//turn off form when click in the outside area
/* wholeForm.addEventListener("click", () => {
    formResetBtn.click()
}) */
//turn on form 
addCommentBtn.addEventListener("click", () => {
    wholeForm.style.display = "flex"
})
//show preview image that user choose
addFile.addEventListener("change", (e) => {
    imageContainer.style.backgroundImage = "url(" + URL.createObjectURL(e.target.files[0]) + ")"
    imageContainer.classList.add("has-image")
    cameraIcon.style.display = "none"
    
})



//CLICK SAVE BTN
const saveRecipeBtn = document.querySelector(".recipe-infor .save-recipe")
const bookMarkIcon = document.querySelector(".recipe-infor .save-recipe img")
const saveRecipeBtnText = document.querySelector(".recipe-infor .save-recipe p")

saveRecipeBtn.addEventListener("click", () => {
    if(saveRecipeBtn.classList.contains("saved")){
        saveRecipeBtn.style.backgroundColor = "#ededed"
        bookMarkIcon.src = "./icon/bookmark.svg"
        saveRecipeBtn.style.color = "#000000"
        saveRecipeBtn.classList.remove("saved")
        return
    }

    saveRecipeBtn.style.backgroundColor = "#FFC105"
    bookMarkIcon.src = "./icon/bookmark_saved.svg"
    saveRecipeBtn.style.color = "#ffffff"
    saveRecipeBtn.classList.add("saved")
})
