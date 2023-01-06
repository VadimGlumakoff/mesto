/*popup*/
let popupBg = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-image");
let buttonClose = document.querySelector(".popup__close");

openButton.addEventListener("click", popupOn);
function popupOn() {
    popupBg.classList.add("popup__opened");
}

buttonClose.addEventListener("click", popupOff);

function popupOff() {
    popupBg.classList.remove("popup__opened");
}

/*submit*/
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__about-me");
let profileName = document.querySelector(".profile__title-name");
let profileAboutMe = document.querySelector(".profile__subtitle-about-me");

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);

/*При нажатии на кнопку "сохранить" закрытие попап*/
let popupSave = document.querySelector(".popup__button");

popupSave.addEventListener("click", popupOff);
