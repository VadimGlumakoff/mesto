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
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const profileOpenButton = document.querySelector(".profile__edit");

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");

const buttonAdd = document.querySelector(".profile__add");
const popupAvatar = document.querySelector(".popup__form_type_avatar");
const formAddCard = document.querySelector(".popup__form_type_add");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const buttonAvatar = document.querySelector(".profile__pencil");
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
    "#template-card",
    clickLike,
    userId,

    deleteCard
  );

  return card.generateCard();
}

// cardList.renderItems();

buttonAdd.addEventListener("click", () => {
  formCardValidator.disableButton();
  cardPopup.open("Создание...");
});

function openPopupProfile() {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;
  jobInput.value = user.about;

  userPopup.open("Сохранение...");
}
const imagePopupClass = new PopupWithImage(".popup_type_image");

function openImagePopup(name, link) {
  imagePopupClass.open(name, link);
}

profileOpenButton.addEventListener("click", openPopupProfile);

const userInfo = new UserInfo(
  {
    name: ".profile__name",
    about: ".profile__about",
  },
  ".profile__avatar"
);

const cardPopup = new PopupWithForm(".popup_type_add", handleCardFormSubmit);

function handleCardFormSubmit(value) {
  api
    .addCard(value)
    .then((result) => {
      const card = createCopyCard(result, userInfo.id);
      cardList.addItem(card);
      cardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardPopup.returnOldTextButton();
    });
}

buttonAvatar.addEventListener("click", () => {
  avatarPopup.open("Сохранение...");
  formAvatarValidator.disableButton();
});

const avatarPopup = new PopupWithForm(
  ".popup_type_avatar",
  handleAvatarFormSubmit
);

function handleAvatarFormSubmit(value) {
  api
    .editAvatar(value.name)
    .then((result) => {
      userInfo.setUserAvatar(result.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.returnOldTextButton();
    });
}

const userPopup = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);

function handleProfileFormSubmit(value) {
  api
    .editUserInfo(value)
    .then((result) => {
      userInfo.setUserInfo(result);
      userPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userPopup.returnOldTextButton();
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
        card.deleteLike();
        card.changeLikeStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addLike(cardId)
      .then((res) => {
        card.updateLikes(res.likes.length);
        card.addLike();
        card.changeLikeStatus();
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
    userInfo.setUserId(user._id);
    cardList.renderItems(initialCards.reverse(), user._id);
    userInfo.setUserInfo(user);
    userInfo.setUserAvatar(user.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

const PopupDelete = new PopupWithConfirmation(
  ".popup_type_del",
  hundlerDeleteCard
);

function hundlerDeleteCard(card, cardId) {
  api
    .removeCard(cardId)
    .then(() => {
      PopupDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

PopupDelete.setEventListeners();

function deleteCard(card, cardId) {
  PopupDelete.open(card, cardId);
}
