import "../pages/index.css";
import Card from "../components/Card.js";
import { config, configValidation } from "../utils/constans.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards } from "../utils/initialCards.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete";
import { changeButtonText } from "../utils/utils";

const profileOpenButton = document.querySelector(".profile__edit");

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const avatar = document.querySelector(".profile__avatar");
const buttonAdd = document.querySelector(".profile__add");
const popupAvatar = document.querySelector(".popup__form_type_avatar");
const formAddCard = document.querySelector(".popup__form_type_add");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const buttonAvatar = document.querySelector(".profile__button_avatar");
const formCardValidator = new FormValidator(configValidation, formAddCard);
formCardValidator.enableValidation();

const formProfileValidator = new FormValidator(
  configValidation,
  formEditProfile
);

const formAvatarValidator = new FormValidator(configValidation, popupAvatar);
formAvatarValidator.enableValidation();

formProfileValidator.enableValidation();

const cardList = new Section(
  (item, userId) => {
    const card = createCopyCard(item, userId);

    cardList.addItem(card);
  },

  ".elements"
);

function createCopyCard(item, userId) {
  const card = new Card(
    item,
    openImagePopup,
    { other: "#template-card", owner: "#template-card-owner" },
    clickLike,
    userId,
    deleteCard
  );

  return card.generateCard();
}

// cardList.renderItems();

buttonAdd.addEventListener("click", () => {
  formCardValidator.disableButton();
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

const cardPopup = new PopupWithForm(".popup_type_add", handleCardFormSubmit);

function handleCardFormSubmit(value, button) {
  const oldText = button.textContent;
  changeButtonText(button, "Создание...");
  api
    .addCard(value)
    .then((result) => {
      const card = createCopyCard(result, userInfo.id);
      cardList.addItem(card);
      cardPopup.close();
      changeButtonText(button, oldText);
    })
    .catch((err) => {
      console.log(err);
    });
}

buttonAvatar.addEventListener("click", () => {
  avatarPopup.open();
});

const avatarPopup = new PopupWithForm(
  ".popup_type_avatar",
  handleAvatarFormSubmit
);

function handleAvatarFormSubmit(value, button) {
  const oldText = button.textContent;
  changeButtonText(button, "Сохранение...");
  api
    .editAvatar(value.name)
    .then((result) => {
      avatar.src = result.avatar;
      avatarPopup.close();
      changeButtonText(button, oldText);
    })
    .catch((err) => {
      console.log(err);
    });
}

const userPopup = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);

function handleProfileFormSubmit(value, button) {
  const oldText = button.textContent;
  changeButtonText(button, "Сохранение...");
  api
    .editUserInfo(value)
    .then((result) => {
      userInfo.setUserInfo(result);
      userPopup.close();
      changeButtonText(button, oldText);
    })
    .catch((err) => {
      console.log(err);
    });
}
avatarPopup.setEventListeners();
cardPopup.setEventListeners();
userPopup.setEventListeners();
imagePopupClass.setEventListeners();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "eba49e48-9424-44a9-a780-bb86209d2093",
    "Content-Type": "application/json",
  },
});

function clickLike(cardId, card, isLiked) {
  if (isLiked) {
    api
      .removeLike(cardId)
      .then((res) => {
        card.updateLikes(res.likes.length);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addLike(cardId)
      .then((res) => {
        card.updateLikes(res.likes.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((res) => {
    const initialCards = res[0];
    const user = res[1];
    userInfo.id = user._id;
    cardList.renderItems(initialCards.reverse(), user._id);
    userInfo.setUserInfo(user);
    avatar.src = user.avatar;
  })
  .catch((err) => {
    console.log(err);
  });

const popupDelete = new PopupDelete(".popup_type_del", hundlerDeleteCard);

function hundlerDeleteCard(card, cardId, button) {
  const oldText = button.textContent;
  changeButtonText(button, "Удаление...");
  api
    .removeCard(cardId)
    .then(() => {
      card.remove();
      card = null;
      popupDelete.close();
      changeButtonText(button, oldText);
    })
    .catch((err) => {
      console.log(err);
    });
}

popupDelete.setEventListeners();

function deleteCard(card, cardId) {
  popupDelete.open(card, cardId);
}
