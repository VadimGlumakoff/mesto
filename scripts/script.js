/*popup*/
let popupBg = document.querySelector(".popup");
let openButton = document.querySelector(".profile__button_edit");
let buttonClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.getElementById("name");
let jobInput = document.getElementById("about");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about");

function popupOn() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAboutMe.textContent;
    popupBg.classList.add("popup_opened");
}

openButton.addEventListener("click", popupOn);

function popupOff() {
    popupBg.classList.remove("popup_opened");
}

buttonClose.addEventListener("click", popupOff);

/*submit*/


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    popupOff();
}

formElement.addEventListener("submit", handleFormSubmit);






