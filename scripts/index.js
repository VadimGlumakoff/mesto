import Card from "./Card.js";
import { config, configValidation } from "./constans.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./initialCards.js";

const profilePopup = document.querySelector(".popup_type_profile");
const profileOpenButton = document.querySelector(".profile__edit");
const profileForm = document.querySelector(".popup__form_type_edit");
const addCardForm = document.querySelector(".popup__form_type_add");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about");
const popupAdd = document.querySelector(".popup_type_add");
const buttonAdd = document.querySelector(".profile__add");
const containerElements = document.querySelector(".elements");
const cardLink = document.getElementById("card-link");
const cardName = document.getElementById("card-name");
const imagePopup = document.querySelector(".popup_type_image");
const popupImageActive = document.querySelector(".popup__image");
const popupSubtitle = document.querySelector(".popup__subtitle");
const closeButtons = document.querySelectorAll(".popup__close");
const formAddCard = document.querySelector(".popup__form_type_add");
const formEditProfile = document.querySelector(".popup__form_type_edit");

const formCardValidator = new FormValidator(configValidation, formAddCard);
formCardValidator.enableValidation();

const formProfileValidator = new FormValidator(
  configValidation,
  formEditProfile
);
formProfileValidator.enableValidation();
//Закрытие esp
function popupEscClose(event) {
  if (event.key === "Escape") {
    const popupOpening = document.querySelector(".popup_opened");
    closePopup(popupOpening);
  }
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");

  button.addEventListener("click", () => closePopup(popup));
});

//Закрытие мышкой по оверлей
function popupMouseClose(event) {
  if (event.target.classList.contains("popup_opened")) {
    const popupOpening = document.querySelector(".popup_opened");
    closePopup(popupOpening);
  }
}

/*попап закрытие*/

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupEscClose);
  document.removeEventListener("mouseup", popupMouseClose);
}

/*попап открытие*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupEscClose);
  document.addEventListener("mouseup", popupMouseClose);
}

/*попап добавление картинки*/

buttonAdd.addEventListener("click", () => {
  formCardValidator.disableAddCardButton();

  openPopup(popupAdd);
});

/*попап редактирование пользователя*/

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
  openPopup(profilePopup);
}

//открытие попап картинки
function openImagePopup(name, link) {
  popupImageActive.src = link;
  popupImageActive.alt = name;
  popupSubtitle.textContent = name;
  openPopup(imagePopup);
}

profileOpenButton.addEventListener("click", openPopupProfile);
/*submit*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((item) => {
  const cardElement = createCopyCard(item);

  // Добавляем в DOM
  document.querySelector(".elements").prepend(cardElement);
});

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = { name: cardName.value, link: cardLink.value };

  const cardElement = createCopyCard(newCard);

  containerElements.prepend(cardElement);

  closePopup(popupAdd);

  cardName.value = "";
  cardLink.value = "";
});

// Создание Экземпляра карточки
function createCopyCard(item) {
  const card = new Card(item, openImagePopup);

  return card.generateCard();
}
