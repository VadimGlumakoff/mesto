import "../pages/index.css";
import Card from "../components/Card.js";
import { config, configValidation } from "../utils/constans.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards } from "../utils/initialCards.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const profileOpenButton = document.querySelector(".profile__edit");

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");

const buttonAdd = document.querySelector(".profile__add");

const formAddCard = document.querySelector(".popup__form_type_add");
const formEditProfile = document.querySelector(".popup__form_type_edit");

const formCardValidator = new FormValidator(configValidation, formAddCard);
formCardValidator.enableValidation();

const formProfileValidator = new FormValidator(
  configValidation,
  formEditProfile
);

formProfileValidator.enableValidation();

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = createCopyCard(item);

      cardList.addItem(card);
    },
  },
  ".elements"
);

function createCopyCard(item) {
  const card = new Card(item, openImagePopup);

  return card.generateCard();
}

cardList.renderItems();

buttonAdd.addEventListener("click", () => {
  formCardValidator.disableAddCardButton();
  cardPopup.open();
});

function openPopupProfile() {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;
  jobInput.value = user.about;

  userPopup.open();
}
const imagePopupClass = new PopupWithImage(".popup_type_image");

function openImagePopup(name, link) {
  imagePopupClass.open(name, link);
}

profileOpenButton.addEventListener("click", openPopupProfile);

const userInfo = new UserInfo({
  name: ".profile__name",
  about: ".profile__about",
});

const cardPopup = new PopupWithForm(".popup_type_add", cardSubmit);

function cardSubmit(value) {
  console.log(value);
  const card = createCopyCard(value);
  console.log(card);
  cardList.addItem(card);
  cardPopup.close();
}

const userPopup = new PopupWithForm(".popup_type_profile", userSubmit);

function userSubmit(value) {
  userInfo.setUserInfo(value);
  userPopup.close();
}
